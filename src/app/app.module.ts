import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import {RouteModule} from './route/route.module'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ErrorComponent } from './error/error.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadDataComponent } from './pages/load-data/load-data.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { SingleProviderComponent } from './pages/single-provider/single-provider.component';
import {UserInterceptor} from './providers/user.interceptor'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ErrorComponent,
    LoadDataComponent,
    AppointmentsComponent,
    ProvidersComponent,
    SingleProviderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
