export class Setor {
    public id: number;
    public nome: string;
    public descricao: string;
    public ativo: boolean;

    constructor() {
        this.nome = '';
        this.descricao = '';
        this.ativo = true;
    }
}