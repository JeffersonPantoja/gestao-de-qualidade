import { Atividade } from './../domain/atividade';
import { Produto } from '../domain/produto';
import { Setor } from '../domain/setor';

export interface Paginator {
    totalRecords: number;
    setores: Setor[];
    produtos: Produto[];
    atividades: Atividade[];
}
