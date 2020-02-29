import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { InternoComponent } from './interno.component';
import { SetorComponent } from './components/setor/setor.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'interno', component: InternoComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'setor', component: SetorComponent },
      { path: 'produto', component: ProdutoComponent}
    ],
    canActivateChild: [AuthGuard]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InternoRoutingModule { }