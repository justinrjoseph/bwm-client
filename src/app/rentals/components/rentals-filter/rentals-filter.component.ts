import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { RentalService } from '../../services';

import { Rental } from '../../../shared';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './rentals-filter.component.html',
  styleUrls: ['./rentals-filter.component.scss']
})
export class RentalsFilterComponent implements OnInit {
  city: string;
  rentals: Rental[] = [];
  error: string;

  constructor(
    private _route: ActivatedRoute,
    private _rentalService: RentalService
  ) {}

  ngOnInit() {
    this._route.params
      .subscribe(
        (params: Params) => {
          console.log(params.city);
          this.city = params.city;

          this._getRentals();
        }
      );
  }

  private _getRentals() {
    this._rentalService.filter(this.city)
      .subscribe(
        (rentals: Rental[]) => this.rentals = rentals,
        ({ error }: HttpErrorResponse) => this.error = error
      );
  }
}
