import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import * as JWT from 'jwt-decode';

import { Login } from '../share/interface/login.interface';
import { Constants } from '../share/enum/constants.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validateTimeStamp() && this.validateToken();
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
        this.router.navigate(['/home/login']);
        localStorage.clear();
        return false;
      }
    } else {
      this.router.navigate(['/home/login']);
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
  }
  
}
