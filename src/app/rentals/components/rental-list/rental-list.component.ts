import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Rental } from '../../../shared';

import { ActivatedRoute } from '@angular/router';

import { RentalService } from '../../services/rental.service';

@Component({
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  message: string;
  rentals$: Observable<Rental[]>;

  constructor(
    private _route: ActivatedRoute,
    private _rentalService: RentalService
  ) {}

  ngOnInit() {
    const registered = this._route.snapshot.queryParams.registered;
    const loggedIn = this._route.snapshot.queryParams.loggedIn;

    if ( registered ) this.message = 'Registration succesful';

    if ( loggedIn ) this.message = 'Logged in successfully';

    this.rentals$ = this._rentalService.getAll();
  }
}
