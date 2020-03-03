import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Constants } from '../enum/constants.enum';
import { ProgressbarService } from '../service/progressbar/progressbar.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private progressbarService: ProgressbarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.setProgressbar(req);

    if (this.dontNeedToken(req)) {
      return next.handle(this.setHeaderWithoutToken(req)).pipe(map(event => {
        this.turnOffProgressBar(event);
        return event;
      }));
    } else {
      const token = localStorage[Constants.TOKEN];

      if (token !== null) {
        return next.handle(this.setHeaderWithToken(req, token)).pipe(map(event => {
          this.turnOffProgressBar(event);
          return event;
        }));
      }
    }
  }

  private dontNeedToken(req: HttpRequest<any>): boolean {
    return req.url.includes('login/enter');
  }

  private setProgressbar(req: HttpRequest<any>) {
    this.progressbarService.showProgress = true;
  }

  private setHeaderWithoutToken(req: HttpRequest<any>) {
    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return authReq;
  }

  private setHeaderWithToken(req: HttpRequest<any>, token: string) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return authReq;
  }

  private turnOffProgressBar(event) {
    if (event instanceof HttpResponse) {
      this.progressbarService.showProgress = false;
    }
  }
}


