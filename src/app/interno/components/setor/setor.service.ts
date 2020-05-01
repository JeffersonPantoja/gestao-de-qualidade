import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Setor } from 'src/app/share/domain/setor';
import { Url } from 'src/app/share/enum/url.enum';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { environment } from 'src/environments/environment';



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

  public register(setor: Setor): Observable<object> {
    return this.httpClient.post<Observable<object>>(
      `${environment.URL_BASE}${Url.INTERNO_SETOR}`, setor
    );
  }

  public edit(setor: Setor): Observable<object> {
    return this.httpClient.put<Observable<object>>(
      `${environment.URL_BASE}${Url.INTERNO_SETOR}`, setor
    );
  }
}

