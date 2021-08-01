import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProvidersService} from '../../service/providers.service'
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  dataOfProviders=null;
  constructor(private _providersService:ProvidersService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let slug=this.route.snapshot.paramMap.get('slug');
    this._providersService.loadProvidersBySlug(slug).subscribe(res=>{
      this.dataOfProviders=res.data
      console.log(res)
    })
  }

}
