import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProgressbarComponent } from './share/component/progressbar/progressbar.component';
import { ToastComponent } from './share/component/toast/toast.component';
import { AuthInterceptor } from './share/interceptor/auth.interceptor';
import { ErroResponseInterceptor } from './share/interceptor/erro-responce.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    AppRoutingModule,
    HomeModule,
    ProgressBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErroResponseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
