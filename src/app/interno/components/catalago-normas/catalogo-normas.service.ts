import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Paginator } from 'primeng/paginator/paginator';

import { Observable } from 'rxjs';

import { Url } from 'src/app/share/enum/url.enum';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoNormasService {

  constructor(private httpClient: HttpClient) { }

  public getNormas(firstItemPage: number): Observable<object> {
    return this.httpClient.get<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_CATALAGO_NORMAS}?firstItemPage=${firstItemPage}`,
    );
  }

  public getNorma(idNorma: number): Observable<object> {
    return this.httpClient.get(
      `${environment.URL_BASE}${Url.INTERNO_CATALAGO_NORMAS}/${idNorma}`, { responseType: 'blob'}
    );
  }
}
