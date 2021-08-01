import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../service/app-service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _post:AppServiceService) { 
    _post.getAllPost().subscribe(data =>{
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
