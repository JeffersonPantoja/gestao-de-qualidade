import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { InternoRoutingModule } from './interno-routing.module';
import { InternoComponent } from './interno.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { AtividadeCadastroComponent } from './components/atividade-cadastro/atividade-cadastro.component';
import { CatalagoNormasComponent } from './components/catalago-normas/catalago-normas.component';
import { NormaIframeComponent } from './components/norma-iframe/norma-iframe.component';

@NgModule({
    declarations: [
        InternoComponent,
        SetorComponent,
        ProdutoComponent,
        AtividadeComponent,
        AtividadeCadastroComponent,
        CatalagoNormasComponent,
        NormaIframeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InternoRoutingModule,
        RouterModule.forChild([{
            path: '', component: InternoComponent
        }]),
        ButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        TableModule,
        FieldsetModule,
        CalendarModule,
    ]
})
export class InternoModule { }
