import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Rental } from '../../../shared';

import { RentalService } from '../../services';

import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {
  form: FormGroup

  rental: Rental;
  categories = Rental.CATEGORIES;

  error: string;

  constructor(
    private _fb: FormBuilder,
    private _rental: RentalService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.rental = new Rental();

    this.form = this._fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      bedrooms: ['', Validators.required],
      dailyRate: ['', Validators.required],
      shared: ['', Validators.required],
    });
  }

  createRental(): void {
    this.rental = { ...this.rental, ...this.form.value };

    this._rental.create(this.rental)
      .subscribe(
        (rental: Rental) => this._router.navigate(['/rentals', rental._id]),
        ({ error }: HttpErrorResponse) => this.error = error
      );
  }

  handleImage(): void {
    this.rental.image = 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/13/image.jpeg';
  }
}
