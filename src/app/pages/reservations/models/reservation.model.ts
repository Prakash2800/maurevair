export interface ReservationModel {
  flightId: string,
  flightNumber: number,
  flightOrigin: string,
  flightDestination: string,
  email: string,
  firstName: string,
  id: number
  isPresentEconomy: boolean
  isPresentFirst: boolean
  isPresentPremiumEconomy: boolean
  lastName: string
  phone: string
  seatType: {
    Economy: number,
    First: number,
    PremiumEconomy: number
  }
  userId: number
};
