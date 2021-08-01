import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private _http:HttpClient) { }
  loadProvidersBySlug(slug):Observable<any>{
    return this._http.post(`${environment.commonURL}/LoadProvidersBySlug/1/0/10`,{ role_id:slug})
  }

  loadSingleProvider(slugSingle):Observable<any>{
    return this._http.get(`${environment.commonURL}/SingleDatabySlug/${slugSingle}/1`)
  }
}
