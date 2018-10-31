import { Category } from './category.enum';

export class Rental {
  id: number;
  image: string;
  title: string;
  city: string;
  street: string;
  category: Category;
  bedrooms: number;
  description: string;
  dailyRate: number;
  shared: boolean;
  createdAt: string;
}
