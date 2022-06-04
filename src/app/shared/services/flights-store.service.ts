import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class FlightsStoreService {
  private _flightId: string = '';
  private _flightId$: BehaviorSubject<string>;
  constructor(
  ) {
    this._flightId$ = new BehaviorSubject<string>(this._flightId);
  }

  public set flightId(flag: string) {
    this._flightId = flag;
    this._flightId$.next(this._flightId);
  }

  public get flightId$(): Observable<string> {
    return this._flightId$.asObservable();
  }
}

