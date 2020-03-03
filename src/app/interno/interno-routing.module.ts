import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { InternoComponent } from './interno.component';


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