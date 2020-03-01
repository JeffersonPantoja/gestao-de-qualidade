import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { Url } from 'src/app/share/enum/url.enum';
import { Setor } from 'src/app/share/domain/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  constructor(private httpClient: HttpClient) { }

  public getSetores(firstItemPage: number): Observable<object> {
    return this.httpClient.get<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_SETOR}?firstItemPage=${firstItemPage}`,
    );
  }

  public registerSetor(setor: Setor): Observable<object> {
    return this.httpClient.post<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_SETOR}`, setor
    );
  }

  public editSetor(setor: Setor): Observable<object> {
    return this.httpClient.put<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_SETOR}`, setor
    );
  }
}

