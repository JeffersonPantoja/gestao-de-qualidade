import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { ToastService } from '../service/toast/toast.service';
import { ProgressbarService } from '../service/progressbar/progressbar.service';
import { Message } from '../enum/message.enum';

@Injectable()
export class ErroResponseInterceptor implements HttpInterceptor {

    constructor(
      private router: Router,
      private toastService: ToastService,
      private progressbarService: ProgressbarService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((error: any, caught: Observable<HttpEvent<any>>) => {
          switch (error.status) {
            case 401:
              this.toastService.showError.next(error.error);
              localStorage.clear();
              this.router.navigate(['/login']);
              break;
            case 402:
              this.toastService.showError.next(error.error);
              break;
            default:
              this.toastService.showError.next(Message.UNEXPECTED_ERROR);
              break;
          }
          this.progressbarService.showProgress = false;
          return next.handle(req);
        })as any);
    }
}
