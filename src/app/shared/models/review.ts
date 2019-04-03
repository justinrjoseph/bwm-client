import { User } from './';

export class Review {
  rating: number;
  text: string;
  createdAt: Date;
  user: User;
}
