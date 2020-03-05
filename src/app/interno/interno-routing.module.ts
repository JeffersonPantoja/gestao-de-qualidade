import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { InternoComponent } from './interno.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { AtividadeDetalhesComponent } from './components/atividade-detalhes/atividade-detalhes.component';


const routes: Routes = [
  {
    path: 'interno', component: InternoComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'setor', component: SetorComponent },
      { path: 'produto', component: ProdutoComponent },
      { path: 'atividade' , component: AtividadeComponent },
      { path: 'atividade-detalhes', component: AtividadeDetalhesComponent}
    ],
    canActivateChild: [AuthGuard]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InternoRoutingModule { }
