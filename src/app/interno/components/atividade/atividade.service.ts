import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Url } from 'src/app/share/enum/url.enum';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(private httpClient: HttpClient) { }

  public getAtividades(firstItemPage: number): Observable<object> {
    return this.httpClient.get<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_ATIVIDADE}?firstItemPage=${firstItemPage}`
    );
  }
}
