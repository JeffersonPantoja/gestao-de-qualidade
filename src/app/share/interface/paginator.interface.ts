import { Setor } from '../domain/setor';
import { Produto } from '../domain/produto';

export interface Paginator {
    totalRecords: number;
    setores: Setor[];
    produtos: Produto[];
}