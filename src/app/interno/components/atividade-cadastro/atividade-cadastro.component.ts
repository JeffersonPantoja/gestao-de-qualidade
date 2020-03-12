import { Usuario } from './../../../share/domain/usuario';
import { Produto } from './../../../share/domain/produto';
import { AtividadeCadastroService } from './atividade-cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/share/domain/setor';

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

  public usuarios: Usuario[];

  public usuariosSelected: Usuario[];

  constructor(
    private atividadeCadastroService: AtividadeCadastroService
  ) {
    this.setores = [];
    this.produtos = [];
    this.usuarios = [];
    this.usuariosSelected = [];
  }

  ngOnInit(): void {
    this.atividadeCadastroService.getSetores().subscribe((setores: Setor[]) => this.setores = setores);
    this.atividadeCadastroService.getProdutos().subscribe((produtos: Produto[]) => this.produtos = produtos);
    this.atividadeCadastroService.getUsuarios().subscribe((usuarios: Usuario[]) => this.usuarios = usuarios);
  }

}
