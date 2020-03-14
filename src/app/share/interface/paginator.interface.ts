import { Atividade } from './../domain/atividade';
import { Produto } from '../domain/produto';
import { Setor } from '../domain/setor';
import { Norma } from '../domain/norma';

export interface Paginator {
    totalRecords: number;
    setores: Setor[];
    produtos: Produto[];
    atividades: Atividade[];
    normas: Norma[];
}
