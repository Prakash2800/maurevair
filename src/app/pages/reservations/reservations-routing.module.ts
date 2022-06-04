import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservationsComponent} from "./container/reservations.component";
import {CreateReservationComponent} from "./container/create-reservation/create-reservation.component";
import {ReservationsListComponent} from "./container/reservations/reservations-list.component";

const routes: Routes = [
  {
    path: '',
    component: ReservationsComponent,
    children: [
      {
        path: '',
        component: ReservationsListComponent,
      },
      {
        path: ':id/create-reservation',
        component: CreateReservationComponent,
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
