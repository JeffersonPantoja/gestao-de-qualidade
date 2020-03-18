import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { AuthGuard } from '../guarda-rotas/auth.guard';
import { Message } from '../share/enum/message.enum';
import { ToastService } from '../share/service/toast/toast.service';
import { Constants } from '../share/enum/constants.enum';
import { Usuario } from '../share/domain/usuario';
import { Perfil } from '../share/enum/perfil.enum';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: MenuItem[];

  public isAutenticated: boolean;

  constructor(
    private auth: AuthGuard,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.isAutenticated = false;
    this.auth.isAutenticated.subscribe((isAutenticated: boolean) => {
      this.isAutenticated = isAutenticated;
      this.createMenuIntens(isAutenticated);
    });
    this.auth.canActivate(null, null);
  }

  private createMenuIntens(isAutenticated: boolean) {
    let isGestor = false;

    if (localStorage[Constants.USUARIO] !== null && localStorage[Constants.USUARIO] !== undefined) {
      const usuario = JSON.parse(localStorage[Constants.USUARIO]) as Usuario;
      isGestor = usuario.perfil === Perfil.GESTOR;
    }
    this.items = [
      {
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-chart-bar',
      },
      {
        label: 'Interno',
        icon: 'pi pi-users',
        visible: isAutenticated,
        items: [
          {
            label: 'Gestor',
            visible: isGestor,
            items: [
              {
                label: 'Setor',
                routerLink: '/interno/setor',
                visible: isGestor,
              },
              {
                label: 'Produto',
                routerLink: '/interno/produto',
                visible: isGestor,
              },
              {
                label: 'Usuário',
                routerLink: '/interno/usuario',
                visible: isGestor,
              }
            ]
          },
          {
            label: 'Processo Automotivos',
            items: [
              {
                label: 'Atividade',
                routerLink: '/interno/atividade'
              },
            ]
          },
          {
            label: 'Catálago de Normas',
            routerLink: '/interno/catalago-normas'
          },
        ]
      }
    ];
  }

  public logout() {
    localStorage.clear();
    this.auth.canActivate(null, null);
    this.toastService.showSuccess.next(Message.LOGOUT);
  }
}
