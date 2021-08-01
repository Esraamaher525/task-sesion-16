import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { LoadDataComponent } from './pages/load-data/load-data.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { SingleProviderComponent } from './pages/single-provider/single-provider.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"user",children:[
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"profile",component:ProfileComponent},
  ]},
  {path:"home",children:[
    {path:"",component:LoadDataComponent},
    {path:"providers/:slug",component:ProvidersComponent},
    {path:"providers/:slug/single-providers/:slug",component:SingleProviderComponent},
    {path:"providers/:slug/single-providers/:slug/all-appointments/:id",component:AppointmentsComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
