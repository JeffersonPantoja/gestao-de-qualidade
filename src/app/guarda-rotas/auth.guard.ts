import { Constants } from '../share/enum/constants.enum';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import * as JWT from 'jwt-decode';

import { Observable, Subject } from 'rxjs';

import { Login } from '../share/interface/login.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  public isAutenticated: Subject<boolean> = new Subject();

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const autenticated = this.validateTimeStamp() && this.validateToken();
    this.isAutenticated.next(autenticated);
    return autenticated;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

  private validateTimeStamp(): boolean {
    if (localStorage[Constants.TIME_STAMP] !== undefined) {
      const dateAtual = new Date();
      const dateVencimento = new Date(parseInt(localStorage[Constants.TIME_STAMP], 10));
      if ((dateVencimento < dateAtual)) {
        this.router.navigate(['/']);
        localStorage.clear();
        return false;
      }
    } else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }

    return true;
  }

  private validateToken(): boolean {
    if (localStorage[Constants.TOKEN] === undefined) {
        return false;
    }
    return true;
  }

  public saveToken(login: Login): void {
    const jwtLogin = JWT(login.token);
    localStorage[Constants.TIME_STAMP] = jwtLogin.exp * 1000;
    localStorage[Constants.TOKEN] = login.token;
    localStorage[Constants.USUARIO] = JSON.stringify(jwtLogin.usuario);
  }
}
