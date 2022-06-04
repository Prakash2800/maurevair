import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FlightsComponent} from "./container/flights.component";
import {FlightsRoutingModule} from "./flights-routing.module";

@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule
  ],
  providers: [

  ],
})
export class FlightsModule {
}
