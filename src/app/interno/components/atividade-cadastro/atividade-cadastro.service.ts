import { Usuario } from './../../../share/domain/usuario';
import { Produto } from './../../../share/domain/produto';
import { Setor } from './../../../share/domain/setor';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/share/enum/url.enum';

@Injectable({
  providedIn: 'root'
})
export class AtividadeCadastroService {

  constructor(private httpClient: HttpClient) { }

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

  public getUsuarios(): Observable<object> {
    return this.httpClient.get<Observable<Usuario[]>>(
      `${environment.URL_BASE}${Url.INTERNO_USUARIO_LISTA}`
    );
  }
}
