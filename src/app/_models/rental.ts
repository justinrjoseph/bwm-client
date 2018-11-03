import { Category } from './category.enum';

export interface Rental {
  _id: string;
  image: string;
  title: string;
  street: string;
  city: string;
  category: Category;
  bedrooms: number;
  description: string;
  dailyRate: number;
  shared: boolean;
  createdAt: string;
}
