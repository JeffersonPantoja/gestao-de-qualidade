import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { InternoModule } from '../interno/interno.module';
import { LoginComponent } from './components/login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



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
        HttpClientModule,
        ToastModule,
        InternoModule,
        TooltipModule
    ]
})
export class HomeModule { }
