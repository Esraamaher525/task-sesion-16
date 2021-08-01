import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProvidersService} from '../../service/providers.service'

@Component({
  selector: 'app-single-provider',
  templateUrl: './single-provider.component.html',
  styleUrls: ['./single-provider.component.scss']
})
export class SingleProviderComponent implements OnInit {
  dataOfSinleProviders=null;
  constructor(private _providersSingleService:ProvidersService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let slug=this.route.snapshot.paramMap.get('slug');
    debugger
    console.log( this._providersSingleService)
    this._providersSingleService.loadSingleProvider(slug).subscribe(res=>{
      this.dataOfSinleProviders=res.data
      console.log(res)
    })
  }

}
