import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { RouterLink } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ToastService } from '../share/service/toast/toast.service';
import { Message } from '../share/enum/message.enum';

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
    this.items = [
      {
        icon: 'pi pi-home',
        routerLink: '/home'
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
            label: 'Setor',
            routerLink: 'interno/setor'
          },
          {
            label: 'Produtos',
            routerLink: 'interno/produto',
          },
          { label: 'Usuários' },
          { label: 'Atividades' },
          { label: 'Incidentes' },
          { label: 'Planos de ação' }
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
