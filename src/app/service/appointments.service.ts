import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private _http:HttpClient) { }
  loadRoles():Observable<any>{
    return this._http.get(`${environment.commonURL}/loadRoles/1`)
  }
  loadAppointments(id):Observable<any>{
    return this._http.post(`${environment.commonURL}/loadAppointmentsToUsers`,{provider_id:id})
  }
  storeReservation(data):Observable<any>{
    return this._http.post(`${environment.commonURL}/storeReservation`,data)

  }
}
