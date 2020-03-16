import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { Usuario } from '../share/domain/usuario';
import { Perfil } from '../share/enum/perfil.enum';
import { Constants } from '../share/enum/constants.enum';
import { Message } from '../share/enum/message.enum';
import { ToastService } from '../share/service/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class GestorGuard implements CanActivate {

  constructor(
    private toastService: ToastService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isGestor = this.isGestor();
    return isGestor;
  }

  private isGestor(): boolean {
    const usuario = JSON.parse(localStorage[Constants.USUARIO]) as Usuario;

    if (usuario.perfil === Perfil.GESTOR) {
      return true;
    }

    this.toastService.showError.next(Message.ACCESS_DANIED);
    this.router.navigate(['/']);
    return false;
  }

}
