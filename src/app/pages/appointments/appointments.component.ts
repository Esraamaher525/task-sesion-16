import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/service/appointments.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  dataOfAppointments=[];
  filterData=null;
  constructor(private route: ActivatedRoute,private _appiontmentsService:AppointmentsService,private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._appiontmentsService.loadAppointments(id).subscribe(res=>{
      this.filterData=[];
      this.dataOfAppointments=res.data;
      let day=res.AdditionalData.day;
      let dateDayFromAPI=new Date(res.AdditionalData.todayDate);
      this.dataOfAppointments.forEach((element,i)=>{
        if(element.id==day){
          var updatedDate=new Date(dateDayFromAPI.setDate(dateDayFromAPI.getDate()));
          element.date=updatedDate;
          this.filterData.push(element)
        }else if(element.id>day){
          var updatedDate=new Date(dateDayFromAPI.setDate(dateDayFromAPI.getDate()+1));
          element.date=updatedDate;
          this.filterData.push(element)
        }
    
      })
    })

  }

  book(e,appointment,date,providerId){
    if(appointment.flag==0){
      let reservationData={
        appointment_id:appointment.id,
        doctor_id:appointment.doctor_id,
        provider_id:providerId,
        date:date
      }
      this._appiontmentsService.storeReservation(reservationData).subscribe(res=>{
        console.log(res)
        e.toElement.parentElement.classList.add("text-decoration")
        this.toastr.success(res.success, 'success');
      })
    }else{
      return false;
    }

  }

}
