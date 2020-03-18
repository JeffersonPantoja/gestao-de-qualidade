import { Perfil } from './../enum/perfil.enum';
import { Status } from './../enum/status.enum';
export class Converter {

  static getNameStatus(status: Status): string {
    let name = '';
    switch (status) {
      case Status.PLANEJAMENTO:
        name = 'Planejamento';
        break;
      case Status.PROJETO_DESENVOLVIMENTO_PRODUTO:
        name = 'Projeto e desenvolvimento do produto';
        break;
      case Status.PROJETO_DESENVOLVIMENTO_PROCESSO:
        name = 'Projeto e desenvolvimento do processo';
        break;
      case Status.ANALISE_ACAO_CORRETIVA:
        name = 'Análise e ação corretiva';
        break;
      case Status.VALIDACAO_PRODUTO_PROCESSO:
        name = 'Validação do produto e do processo';
        break;
      default:
        name = 'Cancelado';
        break;
    }
    return name;
  }

  static getNamePerfil(perfil: Perfil): string {
    let name = '';
    switch (perfil) {
      case Perfil.GESTOR:
        name = 'Gestor';
        break;
      default:
        name = 'Colaborador';
        break;
    }
    return name;
  }
}
