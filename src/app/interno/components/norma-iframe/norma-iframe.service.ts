import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from 'src/app/share/enum/url.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NormaIframeService {

  constructor(private httpClient: HttpClient) { }

  public getNorma(idNorma: number): Observable<object> {
    return this.httpClient.get(
      `${environment.URL_BASE}${Url.INTERNO_CATALAGO_NORMAS}/${idNorma}`, { responseType: 'blob'}
    );
  }
}
