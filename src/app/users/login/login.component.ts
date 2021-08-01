import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error="";
  submitted:boolean=false;
  login=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private _user:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  get f() { return this.login.controls; }
  submit(){
    this.error="";
    this.submitted=true;
    this._user.login(this.login.value).subscribe((res)=>{
      console.log(res)
      this.error=res.error
      localStorage.setItem('token',res.access_token)
    },()=>{},()=>{
      this.router.navigate(['/home'])
    })
  }

}
