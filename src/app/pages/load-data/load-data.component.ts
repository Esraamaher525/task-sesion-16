import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppointmentsService} from '../../service/appointments.service'
@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {
  dataOfRoles=[];
  constructor(private _service:AppointmentsService,private router:Router) { }

  ngOnInit(): void {
    this._service.loadRoles().subscribe(res=>{
      this.dataOfRoles=res.data
      console.log(res)
    })
  }

}
