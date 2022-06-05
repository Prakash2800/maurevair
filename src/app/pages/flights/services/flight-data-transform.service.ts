import {Injectable} from '@angular/core';
import {BookingInfo, FlightApiModel, FlightModel} from "../models/flight.model";
import {AirportModel} from "../models/airport.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FlightDataTransformService {

  constructor(
    private _httpClient: HttpClient
  ) {
    this.getAirportsInfo();
  }

  public airports: AirportModel[] = [];

  public flightDataTransform(flightData: FlightApiModel[]): FlightModel[] {

    const transform = flightData.map((flight: FlightApiModel) => ({
      id: flight.id,
      Carrier: flight.Carrier,
      FlightNumber: flight.FlightNumber,
      Origin: flight.Origin,
      Destination: flight.Destination,
      DepartureTime: flight.DepartureTime,
      ArrivalTime: flight.ArrivalTime,
      BookingInfo: this.manageBookingInfoType(flight.BookingInfo),
    }))

    return transform;
  }

  public manageBookingInfoType(bookingInfo: BookingInfo[] | BookingInfo): BookingInfo[] {
    const isArray = Array.isArray(bookingInfo);
    let transformBookingInfo = [];
    if (isArray) {
      transformBookingInfo = bookingInfo.map((info: BookingInfo) => ({
        CabinClass: info.CabinClass,
        SeatsAvailable: info.SeatsAvailable,
        "self-closing": info["self-closing"]
      }))
    } else {
      transformBookingInfo.push({
        CabinClass: bookingInfo.CabinClass,
        SeatsAvailable: bookingInfo.SeatsAvailable,
        "self-closing": bookingInfo['self-closing']
      })
    }

    return  transformBookingInfo;

  }

  public getAirportName(airportCode: string): string {
    const airportInfo = this.airports.filter(((item: AirportModel) => item.airportCode === airportCode));
    return airportInfo[0]?.country;
  }

  public getAirportsInfo() {
    const url = 'https://my-json-server.typicode.com/Prakash2800/airdb/airports'
    this._httpClient.get(url).subscribe((response: AirportModel[]) => {
      this.airports = response;
    });
  }

}
