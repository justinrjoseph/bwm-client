import { Component, OnInit } from '@angular/core';

import { Rental, Category, Review } from '../../../shared';

import { ActivatedRoute } from '@angular/router';

import { RentalService, ReviewService } from '../../services';

@Component({
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  id: string;
  rental: Rental;
  Category = Category;
  rating: number;
  reviews: Review[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _rentalService: RentalService,
    private _reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.id = this._route.snapshot.params.id;

    this._getRental();
    this._getReviews();
  }

  get location() {
    return `${this.rental.street}, ${this.rental.city}`;
  }

  get guestCount(): number {
    return this.rental.bedrooms + 4;
  }

  get bedCount(): number {
    return this.rental.bedrooms + 2;
  }

  private _getRental(): void {
    this._rentalService.getOne(this.id)
      .subscribe((rental: Rental) => this.rental = rental);
  }

  private _getReviews(): void {
    this._reviewService.getAll(this.id)
      .subscribe((reviews: Review[]) => this.reviews = reviews);
  }
}
