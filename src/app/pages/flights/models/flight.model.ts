export interface FlightModel {
  id: string;
  Carrier: string;
  FlightNumber: string;
  Origin: string;
  Destination: string;
  DepartureTime: Date;
  ArrivalTime: Date;
  BookingInfo: BookingInfo[];
};

export interface BookingInfo {
  CabinClass: string,
  SeatsAvailable: string,
  "self-closing": string
};

export interface FlightApiModel {
  id: string;
  Carrier: string;
  FlightNumber: string;
  Origin: string;
  Destination: string;
  DepartureTime: Date;
  ArrivalTime: Date;
  BookingInfo: BookingInfo[] | BookingInfo;
};


