import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/share/enum/message.enum';
import { Setor } from 'src/app/share/domain/setor';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SetorService } from '../setor/setor.service';
import { ToastService } from 'src/app/share/service/toast/toast.service';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { Produto } from 'src/app/share/domain/produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public totalRecords: number;

  public produtos: Produto[];

  public toRegister: boolean;

  public toEdit: boolean;

  public produtoForm: FormGroup;

  private pageEvent: {first: number};

  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) { 
    this.totalRecords = 0;
    this.toRegister = false;
    this.toEdit = false;
  }

  ngOnInit(): void { }

  private createFormProduto(produto: Produto): void {
    this.produtoForm = this.formBuilder.group({
      id: [produto.id],
      nome: [produto.nome, Validators.required],
      descricao: [produto.descricao, Validators.required],
      ativo: [produto.ativo]
    });
  }

  public loadPage(event: {first: number}): void {
    this.produtos = [];
    this.pageEvent = event;
    this.produtoService.getProdutos(event.first).subscribe((paginator: Paginator) => {
      this.totalRecords = paginator.totalRecords;
      this.produtos = paginator.produtos;
    });
  }

  public openRegister(): void {
    this.toRegister = true;
    this.toEdit = false;
    this.createFormProduto(new Produto());
  }

  public openEdit(produto: Produto): void {
    this.toEdit = true;
    this.toRegister = false;
    this.createFormProduto(produto);
  }

  public cancel(): void {
    this.toEdit = false;
    this.toRegister = false;
  }

  public save(): void {
    if (this.produtoForm.valid) {
      if (this.toRegister) {
        this.produtoService.register(this.produtoForm.value).subscribe(() => {
          this.updatePage(Message.SAVE_SUCCESS);
        });
      } else if (this.toEdit) {
        this.produtoService.edit(this.produtoForm.value).subscribe(() => {
          this.updatePage(Message.SAVE_SUCCESS);
        });
      }
    }
  }

  public deactivate (produto: Produto): void {
    produto.ativo = !produto.ativo;
    this.produtoService.edit(produto).subscribe(() => {
      if (produto.ativo) {
        this.toastService.showSuccess.next(Message.ACTIVATED_SUCCESS);
      } else {
        this.toastService.showSuccess.next(Message.DEACTIVATED_SUCCESS);
      }
    }, () => {
      produto.ativo = !produto.ativo;
    })
  }

  private updatePage(message: string): void {
    this.toastService.showSuccess.next(message);
    this.loadPage(this.pageEvent);
    this.cancel();
  }

}
