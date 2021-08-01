import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { HeaderComponent } from '../home/header/header.component';

const routes: Routes = [
  {path:"test", component:HeaderComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
