import { Setor } from './setor';
import { Perfil } from '../enum/perfil.enum';

export class Usuario {
  public id: number;
  public nome: string;
  public email: string;
  public cpf: string;
  public setor: Setor;
  public perfil: Perfil;
  public ativo: boolean;

  constructor() {
    this.nome = '';
    this.email = '';
    this.cpf = '';
    this.setor = new Setor();
    this.perfil = Perfil.COLABORADOR;
    this.ativo = true;
  }
}
