import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Atividade } from './../../../share/domain/atividade';
import { Produto } from './../../../share/domain/produto';
import { Setor } from './../../../share/domain/setor';
import { Usuario } from './../../../share/domain/usuario';
import { Message } from './../../../share/enum/message.enum';
import { ToastService } from './../../../share/service/toast/toast.service';
import { AtividadeCadastroService } from './atividade-cadastro.service';

@Component({
  selector: 'app-atividade-cadastro',
  templateUrl: './atividade-cadastro.component.html',
  styleUrls: ['./atividade-cadastro.component.css']
})
export class AtividadeCadastroComponent implements OnInit, OnDestroy {

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

  public atividadeForm: FormGroup;

  constructor(
    private atividadeCadastroService: AtividadeCadastroService,
    private formbuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {
    this.setores = [];
    this.produtos = [];
    this.responsaveis = [];
  }


  ngOnInit(): void {
    this.createAtividadeForm(this.atividadeCadastroService.atividade);
    this.getSetores();
    this.setListenerSetor();
    this.setListenerResponsavel();
    this.getProdutos();
  }

  ngOnDestroy(): void {
    this.atividadeCadastroService.atividade = new Atividade();
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
      dataInicio: [
        atividade.dataInicio.length > 0 ? new Date(atividade.dataInicio) : '',
        Validators.required
      ],
      dataFim: [
        atividade.dataFim.length > 0 ? new Date(atividade.dataFim) : '',
        Validators.required
      ],
      status: [atividade.status, Validators.required]
    });
  }

  private getSetores() {
    this.atividadeCadastroService.getSetores().subscribe((setores: Setor[]) => {
      this.setores = setores;
      if (this.atividadeCadastroService.atividade.id !== null) {
        setores.forEach((setor: Setor) => {
          if (setor.id === this.atividadeCadastroService.atividade.setor.id) {
            this.atividadeForm.controls.setor.setValue(setor);
          }
        });
      }
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
      let exist = false;
      this.atividadeForm.value.responsaveis.forEach((responsavelFilter: Usuario) => {
        if (responsavel.id === responsavelFilter.id) {
          exist = true;
        }
      });
      if (!exist) {
        this.atividadeForm.value.responsaveis.push(responsavel);
      }
    });
  }

  private getProdutos() {
    this.atividadeCadastroService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      if (this.atividadeCadastroService.atividade.id !== null) {
        this.produtos.forEach((produto: Produto) => {
          if (produto.id === this.atividadeCadastroService.atividade.produto.id) {
            this.atividadeForm.controls.produto.setValue(produto);
          }
        });
      }
    });
  }

  public onSubmit(): void {
    if (this.atividadeForm.valid) {
      if (this.atividadeCadastroService.atividade.id === null) {
        this.atividadeCadastroService.register(this.createAtividade(new Atividade()))
        .subscribe(() => {
          this.toastService.showSuccess.next(Message.SAVE_SUCCESS);
          this.router.navigate(['/interno/atividade']);
        });
      } else {
        this.atividadeCadastroService.edit(
          this.createAtividade(this.atividadeCadastroService.atividade)
        ).subscribe(() => {
          this.toastService.showSuccess.next(Message.SAVE_SUCCESS);
          this.router.navigate(['/interno/atividade']);
        });
      }
    } else {
      this.toastService.showError.next(Message.FILD_REQUIRED);
    }
  }

  private createAtividade(atividade: Atividade): Atividade {
    atividade.titulo = this.atividadeForm.value.titulo;
    atividade.descricao = this.atividadeForm.value.descricao;
    atividade.produto = this.atividadeForm.value.produto;
    atividade.setor = this.atividadeForm.value.setor;
    atividade.responsaveis = this.atividadeForm.value.responsaveis;
    atividade.dataInicio = this.atividadeForm.value.dataInicio.toISOString();
    atividade.dataFim = this.atividadeForm.value.dataFim.toISOString();
    atividade.status = this.atividadeForm.value.status;
    return atividade;
  }

  public removeResponsavel(responsavel: Usuario): void {
    this.atividadeForm.value.responsaveis = this.atividadeForm.value.responsaveis
      .filter((responsavelFilter: Usuario) => responsavelFilter.id !== responsavel.id);
  }
}


