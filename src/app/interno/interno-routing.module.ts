import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guarda-rotas/auth.guard';
import { GestorGuard } from '../guarda-rotas/gestor.guard';
import { AtividadeCadastroComponent } from './components/atividade-cadastro/atividade-cadastro.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { CatalagoNormasComponent } from './components/catalago-normas/catalago-normas.component';
import { NormaIframeComponent } from './components/norma-iframe/norma-iframe.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { InternoComponent } from './interno.component';


const routes: Routes = [
  {
    path: 'interno', component: InternoComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'setor',
        component: SetorComponent,
        canActivate: [GestorGuard],
      },
      {
        path: 'produto',
        component: ProdutoComponent,
        canActivate: [GestorGuard],
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
        canActivate: [GestorGuard],
      },
      {
        path: 'atividade' ,
        component: AtividadeComponent
      },
      {
        path: 'atividade-cadastro',
        component: AtividadeCadastroComponent,
        canActivate: [GestorGuard],
      },
      {
        path: 'catalago-normas',
        component: CatalagoNormasComponent
      },
      {
        path: 'norma-iframe/:idNorma',
        component: NormaIframeComponent
      },
    ],
    canActivateChild: [AuthGuard]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InternoRoutingModule { }
