import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FlightModel} from "../models/flight.model";
import {Router} from "@angular/router";
import {FlightsStoreService} from "../../../shared/services/flights-store.service";
import {FlightDataTransformService} from "../services/flight-data-transform.service";
import {AirportModel} from "../models/airport.model";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html'
})
export class FlightsComponent implements OnInit {
  public flights: FlightModel[] = [];
  public airports: AirportModel[] = [];

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _flightsStoreService: FlightsStoreService,
    private _flightDataTransformService: FlightDataTransformService
  ) { }

  ngOnInit(): void {
    const url = 'https://my-json-server.typicode.com/Prakash2800/airdb/flights'
    this._httpClient.get(url).subscribe((response: FlightModel[]) => {
      this.flights = this._flightDataTransformService.flightDataTransform(response);
    })
  }

  public getAirportName(airportCode: string): string {
    return this._flightDataTransformService.getAirportName(airportCode);
  }

  public makeReservation(flightId: string): void {
    this._flightsStoreService.flightId = flightId;
    this._router.navigate(['/reservations/'+flightId+'/create-reservation']);
  }

}
