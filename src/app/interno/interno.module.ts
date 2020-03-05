import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { InternoRoutingModule } from './interno-routing.module';
import { InternoComponent } from './interno.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { AtividadeDetalhesComponent } from './components/atividade-detalhes/atividade-detalhes.component';

@NgModule({
    declarations: [
        InternoComponent,
        SetorComponent,
        ProdutoComponent,
        AtividadeComponent,
        AtividadeDetalhesComponent
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
        FieldsetModule
    ]
})
export class InternoModule { }
