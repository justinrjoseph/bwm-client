import { Category } from './category.enum';
import { Booking } from './booking';
import { User } from './user';

export class Rental {
  static readonly CATEGORIES = Object.values(Category);

  _id: string;
  category: Category;
  title: string;
  image: string;
  description: string;
  rating: number;
  street: string;
  city: string;
  bedrooms: number;
  dailyRate: number;
  shared = false;
  createdAt: string;
  user: User;
  bookings: Booking[];

  constructor(init?: Partial<Rental>) {
    Object.assign(this, init);
  }
}
