import { Atividade } from './../domain/atividade';
import { Produto } from '../domain/produto';
import { Setor } from '../domain/setor';
import { Norma } from '../domain/norma';
import { Usuario } from '../domain/usuario';

export interface Paginator {
    totalRecords: number;
    setores: Setor[];
    produtos: Produto[];
    atividades: Atividade[];
    normas: Norma[];
    usuarios: Usuario[];
}
