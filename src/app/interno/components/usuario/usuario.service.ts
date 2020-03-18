import { Usuario } from './../../../share/domain/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginator } from 'primeng/paginator/paginator';
import { environment } from 'src/environments/environment';
import { Url } from 'src/app/share/enum/url.enum';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  public getUsuarios(firstItemPage: number): Observable<object> {
    return this.httpClient.get<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_USUARIO}?firstItemPage=${firstItemPage}`,
    );
  }

  public register(usuario: Usuario): Observable<object> {
    return this.httpClient.post<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_USUARIO}`, usuario
    );
  }

  public edit(usuario: Usuario): Observable<object> {
    return this.httpClient.put<Observable<Paginator>>(
      `${environment.URL_BASE}${Url.INTERNO_USUARIO}`, usuario
    );
  }
}
