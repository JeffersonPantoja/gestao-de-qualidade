import { Message } from './../../../share/enum/message.enum';
import { ToastService } from './../../../share/service/toast/toast.service';
import { Setor } from './../../../share/domain/setor';
import { Atividade } from './../../../share/domain/atividade';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../../share/domain/usuario';
import { Produto } from './../../../share/domain/produto';
import { AtividadeCadastroService } from './atividade-cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade-cadastro',
  templateUrl: './atividade-cadastro.component.html',
  styleUrls: ['./atividade-cadastro.component.css']
})
export class AtividadeCadastroComponent implements OnInit {

  public status = [
    {label: 'Planejado', value: 'A'},
    {label: 'Projeto e dessenvolvimento do produto', value: 'B'},
    {label: 'Projeto e dessenvolvimento do processo', value: 'C'},
    {label: 'Validação do produto e do processo', value: 'D'},
    {label: 'Análise e ação corretiva', value: 'E'},
    {label: 'Cancelado', value: 'F'}
  ];

  public setores: Setor[];

  public produtos: Produto[];

  public responsaveis: Usuario[];

  public responsaveisSelected: Usuario[];

  public atividadeForm: FormGroup;

  constructor(
    private atividadeCadastroService: AtividadeCadastroService,
    private formbuilder: FormBuilder,
    private toastService: ToastService
  ) {
    this.setores = [];
    this.produtos = [];
    this.responsaveis = [];
    this.responsaveisSelected = [];
  }

  ngOnInit(): void {

    this.createAtividadeForm(new Atividade());
    this.getSetores();
    this.setListenerSetor();
    this.setListenerResponsavel();
    this.getProdutos();

  }

  private createAtividadeForm(atividade: Atividade) {
    this.atividadeForm = this.formbuilder.group({
      id: [atividade.id],
      titulo: [atividade.titulo, Validators.required],
      descricao: [atividade.descricao, Validators.required],
      produto: [atividade.produto, Validators.required],
      setor: [atividade.setor, Validators.required],
      responsavel: [],
      responsaveis: [atividade.responsaveis],
      dataInicio: [atividade.dataInicio, Validators.required],
      dataFim: [atividade.dataFim, Validators.required],
      status: [atividade.status, Validators.required]
    });
  }

  private getSetores() {
    this.atividadeCadastroService.getSetores().subscribe((setores: Setor[]) => {
      this.setores = setores;
      this.atividadeForm.controls.setor.setValue(setores[0]);
      this.atividadeCadastroService.getResponsaveis(setores[0].id).subscribe((usuarios: Usuario[]) => this.responsaveis = usuarios);
    });
  }

  private setListenerSetor() {
    this.atividadeForm.get('setor').valueChanges.subscribe((setor: Setor) => {
      this.atividadeCadastroService.getResponsaveis(setor.id).subscribe((usuarios: Usuario[]) => this.responsaveis = usuarios);
    });
  }

  private setListenerResponsavel() {
    this.atividadeForm.get('responsavel').valueChanges.subscribe((responsavel: Usuario) => {
      this.atividadeForm.value.responsaveis.push(responsavel);
    });
  }

  private getProdutos() {
    this.atividadeCadastroService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      this.atividadeForm.controls.produto.setValue(produtos[0]);
    });
  }

  public onSubmit(): void {
    console.log(this.atividadeForm.value);
    if (this.atividadeForm.valid) {
    } else {
      this.toastService.showError.next(Message.FILD_REQUIRED);
    }
  }
}


