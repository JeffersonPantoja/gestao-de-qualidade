import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Url } from 'src/app/share/enum/url.enum';
import { Login } from 'src/app/share/interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public enter(email: string, password: string): Observable<object> {
    return this.httpClient.post<Observable<Login>>(
      `${environment.URL_BASE}${Url.LOGIN_ENTER}`,
      { email, password }
    );
  }
}
