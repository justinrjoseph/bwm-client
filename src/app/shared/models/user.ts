import { Booking, Rental } from './';

export interface User {
  name?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  bookings: Booking[];
  rentals: Rental[]
}
