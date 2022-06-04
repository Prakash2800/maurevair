import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../../authentication/model/user.model";
import {UserService} from "../../../../shared/services/user.service";
import {ReservationModel} from "../../models/reservation.model";
import {FlightApiModel, FlightModel} from "../../../flights/models/flight.model";
import {FlightDataTransformService} from "../../../flights/services/flight-data-transform.service";

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html'
})
export class ReservationsListComponent implements OnInit {

  public reservations: ReservationModel[];
  public flightDetails: FlightModel;
  private _userId: number;

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService,
    private _flightDataTransformService: FlightDataTransformService
  ) {
    this.getCurrentUserId();
  }

  ngOnInit(): void {
    this.getReservationInfo();
    this.getFlightDetails();
  }

  public getAirportName(airportCode: string): string {
    return this._flightDataTransformService.getAirportName(airportCode);
  }

  private getReservationInfo(): void {
    const urlGet = `api/reservations?userId=${this._userId}`
    this._httpClient.get(urlGet).subscribe((response: ReservationModel[]) => {
      this.reservations = response;
    });
  }

  private getCurrentUserId(): void {
    this._userService.currentUserInfo().subscribe((userInfo: UserModel) => {
      this._userId = userInfo.id;
    })
  }

  private getFlightDetails(): void {
    this._httpClient.get('/api/flights').subscribe((flights: FlightApiModel[]) => {
      const flightDetails = this._flightDataTransformService.flightDataTransform(flights);
      this.flightDetails = flightDetails.find( (flight: FlightModel) => {
        return flight.id === this.reservations[0]?.flightId;
      });
    })

  }

}
