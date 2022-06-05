import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {flightNamePipe} from "./shared/pipes/flightName.pipe";
import {FlightsStoreService} from "./shared/services/flights-store.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuardService} from "./features/authentication/auth-guard.service";
import {AuthService} from "./features/authentication/auth.service";
import {UserService} from "./shared/services/user.service";
import {HeaderModule} from "./features/header/header.module";
import {FlightDataTransformService} from "./pages/flights/services/flight-data-transform.service";
import {NavBarModule} from "./features/nav-bar/nav-bar.module";

@NgModule({
  declarations: [
    AppComponent,
    flightNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule,
    NavBarModule
  ],
  providers: [
    FlightsStoreService,
    AuthGuardService,
    AuthService,
    UserService,
    FlightDataTransformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
