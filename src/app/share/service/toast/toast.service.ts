import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public showSuccess: Subject<string> = new Subject();
  public showInfo: Subject<string> = new Subject();
  public showWarn: Subject<string> = new Subject();
  public showError: Subject<string> = new Subject();

  constructor() { }


}
