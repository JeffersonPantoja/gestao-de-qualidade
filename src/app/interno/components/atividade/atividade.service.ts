import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Url } from 'src/app/share/enum/url.enum';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(private httpClient: HttpClient) { }

  public getAtividades(firstItemPage: number): Observable<object> {
    return this.httpClient.get(`${environment.URL_BASE}${Url.INTERNO_ATIVIDADE}?firstItemPage=${firstItemPage}`);
  }
}
