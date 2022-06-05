import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FlightsStoreService} from "../../../../shared/services/flights-store.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HTTPOPTIONS} from "../../../../shared/constant/http-options.constants";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingInfo, FlightApiModel} from "../../../flights/models/flight.model";
import {UserService} from "../../../../shared/services/user.service";
import {UserModel} from "../../../authentication/model/user.model";
import {FlightDataTransformService} from "../../../flights/services/flight-data-transform.service";
import {AirportModel} from "../../../flights/models/airport.model";
import {ReservationModel} from "../../models/reservation.model";

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html'
})
export class CreateReservationComponent implements OnInit, OnDestroy {
  public createReservation: FormGroup;
  public isSubmitted = false;
  public isEconomy = true;
  public isPremium = false;
  public isFirst = false;
  public maxSeatEconomy: number;
  public maxSeatPremiumEconomy: number;
  public maxSeatFirst: number;

  private _flightDetails: any;
  private _bookingInfo: BookingInfo[];
  private _userInfo: UserModel;
  private _flightIdSubscription: Subscription | undefined;
  private _flightId = '';

  constructor(
    private _flightsStoreService: FlightsStoreService,
    private _flightDataTransformService: FlightDataTransformService,
    private _fb: FormBuilder,
    private _httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router,
    private _changeRef: ChangeDetectorRef
  ) {
    this.createReservation = this._fb.group({});
    this.getCurrentUserId();
  }

  ngOnInit(): void {
    this.getFlightId();
    this.getFlightDetails();
    this.setupReservationForm();
  }

  ngOnDestroy() {
    if(this._flightIdSubscription) {
      this._flightIdSubscription.unsubscribe();
    }
  }

  public makeReservation(): void {
    this.isSubmitted = true;
    if (this.createReservation.valid) {

      this.updateFlightInfo(this.createReservation.value);
      this.updateReservationValue();

      const formValue = JSON.stringify(this.createReservation.value);
      const url = 'https://my-json-server.typicode.com/Prakash2800/airdb/reservations'
      this._httpClient.post(url , formValue, HTTPOPTIONS).subscribe((response: any) => {
      });

      this._router.navigate(['flights']);
    }
  }

  // needs improvements
  private updateFlightInfo(flightInfo: ReservationModel) {
    let bookingInfoToPatch = [];

    const cabinFirst = this._bookingInfo.find(((item: any) => item.CabinClass === 'First'));
    if (cabinFirst) {
      cabinFirst.SeatsAvailable = (flightInfo.seatType.First > 0) ? (parseInt(cabinFirst.SeatsAvailable) - flightInfo.seatType.First).toString() : cabinFirst.SeatsAvailable;
      bookingInfoToPatch.push(cabinFirst)
    }

    const cabinPremiumEconomy = this._bookingInfo.find(((item: any) => item.CabinClass === 'PremiumEconomy'));
    if (cabinPremiumEconomy) {
      cabinPremiumEconomy.SeatsAvailable = (flightInfo.seatType.PremiumEconomy > 0) ? (parseInt(cabinPremiumEconomy.SeatsAvailable) - flightInfo.seatType.PremiumEconomy).toString() : cabinPremiumEconomy.SeatsAvailable;
      bookingInfoToPatch.push(cabinPremiumEconomy)
    }

    const cabinEconomy = this._bookingInfo.find(((item: any) => item.CabinClass === 'Economy'));
    if (cabinEconomy) {
      cabinEconomy.SeatsAvailable = (flightInfo.seatType.Economy > 0) ? (parseInt(cabinEconomy.SeatsAvailable) - flightInfo.seatType.Economy).toString() : cabinEconomy.SeatsAvailable;
      bookingInfoToPatch.push(cabinEconomy);
    }

    const updatedbookingInfoToPatch = {
      "BookingInfo": bookingInfoToPatch
    }

    const flightUrl = `https://my-json-server.typicode.com/Prakash2800/airdb/flights/${this._flightId}`
    this._httpClient.patch(flightUrl, updatedbookingInfoToPatch, HTTPOPTIONS).subscribe((response: any) => {
    });


  }

  private updateReservationValue(): void {
    this.createReservation.get('flightNumber').setValue(this._flightDetails.FlightNumber);
    this.createReservation.get('flightOrigin').setValue(this._flightDetails.Origin);
    this.createReservation.get('flightDestination').setValue(this._flightDetails.Destination);
  }

  private getFlightId(): void {
    this._flightId = this._activatedRoute.snapshot.params['id'];
  }

  private setupReservationForm(): void {
    const emailReg = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const letters = /^[A-Za-z]+$/;

    this.createReservation = this._fb.group({
      flightId: [this._flightId, ''],
      flightNumber: ['', ''],
      flightOrigin: ['', ''],
      flightDestination: ['', ''],
      userId: [this._userInfo.id, ''],
      firstName: [this._userInfo.firstName, [Validators.required, Validators.pattern(letters)]],
      lastName: [this._userInfo.lastName, [Validators.required, Validators.pattern(letters)]],
      email: [this._userInfo.email, [Validators.required, Validators.pattern(emailReg)]],
      phone: [this._userInfo.phone, [Validators.required, Validators.minLength(6)]],
      // checkbox for seatType
      isPresentEconomy: [true, ''],
      isPresentPremiumEconomy: ['', ''],
      isPresentFirst: ['', ''],

      // input number of seats
      seatType: this._fb.group({
        Economy: [1, ''],
        PremiumEconomy: ['', ''],
        First: ['', ''],
      })
    });

    this._changeRef.detectChanges();
  }

  private getFlightDetails(): void {
    const url = 'https://my-json-server.typicode.com/Prakash2800/airdb/flights'
    this._httpClient.get(url).subscribe((flights: any) => {
      this._flightDetails = flights.find( (flight: any) => {
        return flight.id === this._flightId;
      });

      this._bookingInfo = this._flightDataTransformService.manageBookingInfoType(this._flightDetails.BookingInfo);
      this.seatsInfo();
    })
  }

  private seatsInfo(): void {
    this.maxSeatEconomy = this.getSeatsAvailableByCategory('Economy');
    this.maxSeatPremiumEconomy = this.getSeatsAvailableByCategory('PremiumEconomy');
    this.maxSeatFirst = this.getSeatsAvailableByCategory('First');
    this.setValidators();
  }

  private setValidators(): void {
    this.createReservation.get('seatType').get('Economy').setValidators([Validators.min(1), Validators.max(this.maxSeatEconomy)]);
    this.createReservation.get('seatType').get('PremiumEconomy').setValidators([Validators.min(1), Validators.max(this.maxSeatPremiumEconomy)]);
    this.createReservation.get('seatType').get('First').setValidators([Validators.min(1), Validators.max(this.maxSeatFirst)]);
  }

  private getSeatsAvailableByCategory(seatType: string): number {
    let seatAvailable: number;
    const bookingInfo = this._bookingInfo.find((elem) => {
      return elem.CabinClass === seatType;
    })
    seatAvailable = bookingInfo ? parseInt(bookingInfo?.SeatsAvailable) : 0;
    return seatAvailable;
  }

  private getCurrentUserId(): void {
    this._userService.currentUserInfo().subscribe((userInfo: UserModel) => {
      this._userInfo = userInfo;
    })
  }

}
