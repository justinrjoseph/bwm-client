import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Rental } from '../../_models/rental';

import { RentalService } from '../rental.service';

@Component({
  selector: 'rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals$: Observable<Rental[]>;

  constructor(private _rentalService: RentalService) { }

  ngOnInit() {
    this.rentals$ = this._rentalService.getAll();
  }
}
