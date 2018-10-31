import { Injectable } from '@angular/core';

import { Rental } from '../_models/rental';
import { Category } from '../_models/category.enum';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private _rentals: Rental[] = [
    {
      id: 1,
      image: 'http://via.placeholder.com/350x250',
      title: 'Central Apartment',
      street: 'Times Square',
      city: 'New York',
      category: Category.Apartment,
      bedrooms: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '12/24/2017'
    },
    {
      id: 2,
      image: "http://via.placeholder.com/350x250",
      title: "Central Apartment 2",
      city: "San Francisco",
      street: "Main Street",
      category: Category.Condo,
      bedrooms: 2,
      description: "Very nice apartment",
      dailyRate: 12,
      shared: true,
      createdAt: "12/24/2017"
    },
    {
      id: 3,
      image: "http://via.placeholder.com/350x250",
      title: "Central Apartment 3",
      street: "Hlavna",
      city: "Bratislava",
      category: Category.Condo,
      bedrooms: 2,
      description: "Very nice apartment",
      dailyRate: 334,
      shared: true,
      createdAt: "12/24/2017"
    },
    {
      id: 4,
      image: "http://via.placeholder.com/350x250",
      title: "Central Apartment 4",
      street: "Haupt Strasse",
      city: "Berlin",
      category: Category.House,
      bedrooms: 9,
      description: "Very nice apartment",
      dailyRate: 33,
      shared: true,
      createdAt: "12/24/2017"
    }
  ];

  constructor() {}

  getAll(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer) => {
      observer.next(this._rentals);
    });
  }

  getOne(id: number): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      const rental = this._rentals.find((rental) => rental.id === id);

      observer.next(rental);
    });
  }
}
