import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { Url } from 'src/app/share/enum/url.enum';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  constructor(private httpClient: HttpClient) { }

  public getSetores(page: number): Observable<object> {
    return this.httpClient.get<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_SETOR}?page=${page}`,
    );
  }
}
