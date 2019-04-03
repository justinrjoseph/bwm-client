import { User, Rental, Review } from './';

export class Booking {
  static readonly DATE_FORMAT = 'MM/DD/YYYY';

  _id: string;
  start: string;
  end: string;
  days: number;
  guests: number;
  totalPrice: number;
  createdAt: string;
  user: User;
  rental: Rental;
  review: Review;
}
