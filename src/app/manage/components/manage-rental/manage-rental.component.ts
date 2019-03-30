import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { Rental } from '../../../shared';

import { RentalService } from '../../../rentals/services';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'manage-rental',
  templateUrl: './manage-rental.component.html',
  styleUrls: ['./manage-rental.component.scss']
})
export class ManageRentalComponent implements OnInit {
  rentals: Rental[] = [];
  deleteIdx: number;

  constructor(
    private _rentalService: RentalService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this._rentalService.getAllForUser()
      .subscribe(
        (rentals: Rental[]) => this.rentals = rentals,
        ({ error }: HttpErrorResponse) => {}
      )
  }

  deleteRental(id: string) {
    this._rentalService.delete(id)
      .subscribe(
        (deletedRental: Rental) => {
          this.rentals = this.rentals.filter((rental) => {
            return rental._id !== deletedRental._id;
          });
        },
        ({ error }: HttpErrorResponse) => this._toastr.error(error)
      );
  }
}
