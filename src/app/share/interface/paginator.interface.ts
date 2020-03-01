import { Setor } from '../domain/setor';

export interface Paginator {
    totalRecords: number;
    setores: Setor[];
}