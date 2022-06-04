import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService as AuthGuard} from './features/authentication/auth-guard.service';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'flights',
    loadChildren: () => import('./pages/flights/flights.module').then(m => m.FlightsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reservations',
    loadChildren: () => import('./pages/reservations/reservations.module').then(m => m.ReservationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'flights',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
