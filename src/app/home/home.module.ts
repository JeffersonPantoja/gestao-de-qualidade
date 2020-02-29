import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        RouterModule.forChild([{
            path: '', component: HomeComponent
        }]),
        MenubarModule,
        ButtonModule,
        ToolbarModule,
        ReactiveFormsModule,
        MessageModule,
        InputTextModule,
        HttpClientModule,
        ToastModule
    ]
})
export class HomeModule { }