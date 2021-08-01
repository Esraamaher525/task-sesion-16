import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppServiceService } from '../../service/app-service.service';
import {User} from '../../user'
import {UserService} from '../../service/user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userBefor="";
  errorPassword=""
  submitted:boolean=false;
  register=new FormGroup({
    name:new FormControl("",[Validators.required]),
    password:new FormControl('',[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    gender:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.minLength(11)]),
  })
  constructor(private _user:UserService,private router:Router) {}
  get f() { return this.register.controls; }
  submit(){
    this.errorPassword="";
    this.userBefor="";
    this.register.value.role=1;
    this.submitted=true;
    this._user.register(this.register.value).subscribe(res=>{
      this.errorPassword=res.error.password;
      this.userBefor=res.error.email;
    },()=>{

    },()=>{
      this.router.navigate(['/home'])
    })
  }
  ngOnInit(): void {}
}
