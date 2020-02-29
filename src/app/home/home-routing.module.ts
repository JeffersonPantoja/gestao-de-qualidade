import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent}
    ]
  },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }