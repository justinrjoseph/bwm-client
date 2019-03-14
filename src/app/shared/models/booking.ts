import { Rental, User } from './';

export class Booking {
  static readonly DATE_FORMAT = 'MM/DD/YYYY';

  _id: string;
  start: string;
  end: string;
  days: number;
  guests: number;
  totalPrice: number;
  createdAt: string;
  rental: Rental;
  user: User;
}
