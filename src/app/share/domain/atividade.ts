import { Status } from './../enum/status.enum';
import { Usuario } from './usuario';
import { Produto } from './produto';
import { Setor } from './setor';

export class Atividade {
  public id: number;
  public titulo: string;
  public descricao: string;
  public produto: Produto;
  public setor: Setor;
  public responsaveis: Usuario[];
  public dataInicio: string;
  public dataFim: string;
  public status: Status;

  constructor() {
    this.id = null;
    this.titulo = '';
    this.descricao = '';
    this.produto = new Produto();
    this.setor = new Setor();
    this.responsaveis = [];
    this.dataInicio = '';
    this.dataFim = '';
    this.status = Status.PLANEJAMENTO;
  }

}
