import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';

import { HttpClientModule } from '@angular/common/http';
import { InternoComponent } from './interno.component';
import { InternoRoutingModule } from './interno-routing.module';
import { SetorComponent } from './components/setor/setor.component';
import { ProdutoComponent } from './components/produto/produto.component';

@NgModule({
    declarations: [
        InternoComponent,
        SetorComponent,
        ProdutoComponent
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