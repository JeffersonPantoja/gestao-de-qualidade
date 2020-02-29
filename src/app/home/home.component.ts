import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  items: MenuItem[];

  constructor() { }


  ngOnInit() {
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
            items: [
              { label: 'Setor', },
              { label: 'Produtos'},
              { label: 'Usuários'},
              { label: 'Atividades'},
              { label: 'Incidentes'},
              { label: 'Planos de ação'}
            ]
          }
      ]
  }

}
