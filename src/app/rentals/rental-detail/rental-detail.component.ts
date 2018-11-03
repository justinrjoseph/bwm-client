import { Component, OnInit } from '@angular/core';

import { Rental } from '../../_models/rental';
import { Category } from '../../_models/category.enum';

import { ActivatedRoute } from '@angular/router';

import { RentalService } from '../rental.service';

@Component({
  selector: 'rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental: Rental;
  Category = Category;

  constructor(
    private _route: ActivatedRoute,
    private _rentalService: RentalService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params.id;

    this._rentalService.getOne(id)
      .subscribe((rental: Rental) => this.rental = rental);
  }

  get guestCount(): number {
    return this.rental.bedrooms + 4;
  }

  get bedCount(): number {
    return this.rental.bedrooms + 2;
  }
}
