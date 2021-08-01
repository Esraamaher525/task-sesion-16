import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  register(userData):Observable<any>{
    return this._http.post(`${environment.commonURL}/signUp`,userData)
  }
  login(userData):Observable<any>{
    return this._http.post(`${environment.commonURL}/login`,userData)
  }
  
}
