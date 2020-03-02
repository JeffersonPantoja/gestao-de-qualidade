import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Setor } from 'src/app/share/domain/setor';
import { SetorService } from './setor.service';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { ToastService } from 'src/app/share/service/toast/toast.service';
import { Message } from 'src/app/share/enum/message.enum';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  public totalRecords: number;

  public setores: Setor[];

  public toRegister: boolean;

  public toEdit: boolean;

  public setorForm: FormGroup;

  private pageEvent: {first: number};

  constructor(
    private setorService: SetorService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) { 
    this.setores = [];
    this.totalRecords = 0;
    this.toRegister = false;
    this.toEdit = false;
  }

  ngOnInit(): void { }

  private createFormSetor(setor: Setor): void {
    this.setorForm = this.formBuilder.group({
      id: [setor.id],
      nome: [setor.nome, Validators.required],
      descricao: [setor.descricao, Validators.required],
      ativo: [setor.ativo]
    });
  }

  public loadPage(event: {first: number}): void {
    this.setores = [];
    this.pageEvent = event;
    this.setorService.getSetores(event.first).subscribe((paginator: Paginator) => {
      this.totalRecords = paginator.totalRecords;
      this.setores = paginator.setores;
    });
  }

  public openRegister(): void {
    this.toRegister = true;
    this.toEdit = false;
    this.createFormSetor(new Setor());
  }

  public openEdit(setor: Setor): void {
    this.toEdit = true;
    this.toRegister = false;
    this.createFormSetor(setor);
  }

  public cancel(): void {
    this.toEdit = false;
    this.toRegister = false;
  }

  public save(): void {
    if (this.setorForm.valid) {
      if (this.toRegister) {
        this.setorService.register(this.setorForm.value).subscribe(() => {
          this.updatePage(Message.SAVE_SUCCESS);
        });
      } else if (this.toEdit) {
        this.setorService.edit(this.setorForm.value).subscribe(() => {
          this.updatePage(Message.SAVE_SUCCESS);
        });
      }
    }
  }

  public deactivate (setor: Setor): void {
    setor.ativo = !setor.ativo;
    this.setorService.edit(setor).subscribe(() => {
      if (setor.ativo) {
        this.toastService.showSuccess.next(Message.ACTIVATED_SUCCESS);
      } else {
        this.toastService.showSuccess.next(Message.DEACTIVATED_SUCCESS);
      }
    }, () => {
      setor.ativo = !setor.ativo;
    })
  }

  private updatePage(message: string): void {
    this.toastService.showSuccess.next(message);
    this.loadPage(this.pageEvent);
    this.cancel();
  }
}
