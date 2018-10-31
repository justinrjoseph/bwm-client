import { Component, OnInit } from '@angular/core';

import { Rental } from '../../_models/rental';

import { ActivatedRoute } from '@angular/router';

import { RentalService } from '../rental.service';

@Component({
  selector: 'rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental: Rental;

  constructor(
    private _route: ActivatedRoute,
    private _rentalService: RentalService
  ) {}

  ngOnInit() {
    const id = +this._route.snapshot.params.id;

    this._rentalService.getOne(id)
      .subscribe((rental: Rental) => this.rental = rental);
  }
}
