import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReservationsComponent} from "./container/reservations.component";
import {CreateReservationComponent} from "./container/create-reservation/create-reservation.component";
import {RouterModule} from "@angular/router";
import {ReservationsListComponent} from "./container/reservations/reservations-list.component";
import {ReservationsRoutingModule} from "./reservations-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    ReservationsComponent,
    CreateReservationComponent,
    ReservationsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReservationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
})
export class ReservationsModule {
}
