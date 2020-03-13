import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Url } from 'src/app/share/enum/url.enum';
import { environment } from 'src/environments/environment';
import { Atividade } from './../../../share/domain/atividade';
import { Produto } from './../../../share/domain/produto';
import { Setor } from './../../../share/domain/setor';
import { Usuario } from './../../../share/domain/usuario';


@Injectable({
  providedIn: 'root'
})
export class AtividadeCadastroService {

  public atividadeSubject: Subject<Atividade> = new Subject<Atividade>();

  public atividade: Atividade;

  constructor(private httpClient: HttpClient) {
    this.atividade = new Atividade();
    this.atividadeSubject.subscribe((atividade: Atividade) => {
      this.atividade = atividade;
    });
  }

  public getSetores(): Observable<object> {
    return this.httpClient.get<Observable<Setor[]>>(
      `${environment.URL_BASE}${Url.INTERNO_SETOR_LISTA}`
    );
  }

  public getProdutos(): Observable<object> {
    return this.httpClient.get<Observable<Produto[]>>(
      `${environment.URL_BASE}${Url.INTERNO_PRODUTO_LISTA}`
    );
  }

  public getResponsaveis(idSetor: number): Observable<object> {
    return this.httpClient.get<Observable<Usuario[]>>(
      `${environment.URL_BASE}${Url.INTERNO_USUARIO_LISTA}?idSetor=${idSetor}`
    );
  }

  public register(atividade: Atividade): Observable<object> {
    return this.httpClient.post<Observable<Atividade>>(
    `${environment.URL_BASE}${Url.INTERNO_ATIVIDADE}`, atividade);
  }

  public edit(atividade: Atividade): Observable<object> {
    return this.httpClient.put<Observable<Atividade>>(
    `${environment.URL_BASE}${Url.INTERNO_ATIVIDADE}`, atividade);
  }
}
