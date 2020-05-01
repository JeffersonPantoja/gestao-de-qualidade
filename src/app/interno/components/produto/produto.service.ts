import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Paginator } from 'primeng/paginator/paginator';

import { Produto } from 'src/app/share/domain/produto';
import { Url } from 'src/app/share/enum/url.enum';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  public getProdutos(firstItemPage: number): Observable<object> {
    return this.httpClient.get<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_PRODUTO}?firstItemPage=${firstItemPage}`,
    );
  }

  public register(produto: Produto): Observable<object> {
    return this.httpClient.post<Observable<object>>(
      `${environment.URL_BASE}${Url.INTERNO_PRODUTO}`, produto
    );
  }

  public edit(produto: Produto): Observable<object> {
    return this.httpClient.put<Observable<object>>(
      `${environment.URL_BASE}${Url.INTERNO_PRODUTO}`, produto
    );
  }
}
