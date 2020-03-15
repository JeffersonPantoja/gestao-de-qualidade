import { CatalagoNormasComponent } from './components/catalago-normas/catalago-normas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { AtividadeCadastroComponent } from './components/atividade-cadastro/atividade-cadastro.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { InternoComponent } from './interno.component';
import { NormaIframeComponent } from './components/norma-iframe/norma-iframe.component';
import { AcessoGestorGuard } from '../auth/acesso-gestor.guard';

const routes: Routes = [
  {
    path: 'interno', component: InternoComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'setor',
        component: SetorComponent,
        canActivate: [AcessoGestorGuard],
      },
      { path: 'produto', component: ProdutoComponent },
      { path: 'atividade' , component: AtividadeComponent },
      { path: 'atividade-cadastro', component: AtividadeCadastroComponent},
      { path: 'catalago-normas', component: CatalagoNormasComponent},
      { path: 'norma-iframe/:idNorma', component: NormaIframeComponent},
    ],
    canActivateChild: [AuthGuard]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InternoRoutingModule { }
