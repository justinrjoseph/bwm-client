import { Component, OnInit } from '@angular/core';

import { Rental, Category } from '../../../shared';

import { ActivatedRoute } from '@angular/router';

import { RentalService } from '../../services';

import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'rental-edit',
  templateUrl: './rental-edit.component.html',
  styleUrls: ['./rental-edit.component.scss']
})
export class RentalEditComponent implements OnInit {
  rental: Rental;
  Category = Category;

  constructor(
    private _route: ActivatedRoute,
    private _rentalService: RentalService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params.id;

    this._rentalService.getOne(id)
      .subscribe((rental: Rental) => this.rental = rental);
  }

  get location(): string {
    return `${this.rental.street}, ${this.rental.city}`;
  }

  get guestCount(): number {
    return (+this.rental.bedrooms + 4) || 0;
  }

  get bedCount(): number {
    return (+this.rental.bedrooms + 2) || 0;
  }

  updateRental(id: string, update: Partial<Rental>): void {
    this._rentalService.update(id, update)
      .subscribe(
        (rental: Rental) => {
          this.rental = rental;

          if ( update.street || update.city ) {
            this._rentalService.changeLocation(`${this.rental.street}, ${this.rental.city}`);
          }
        },
        ({ error }: HttpErrorResponse) => this._toastr.error(error)
      );
  }
}
