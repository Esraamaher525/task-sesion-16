import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  mainRoute="https://jsonplaceholder.typicode.com/posts"

  constructor(private _http:HttpClient) { }
  getAllPost():Observable<any>{
    return this._http.get(`${this.mainRoute}`)
  }

  register(userData):Observable<any>{
    return this._http.post("http://medical.mind-techs.com/api/auth/signUp",userData)
  }

  login(userData):Observable<any>{
    return this._http.post("http://localhost:4100/user/login",userData)
  }



}
