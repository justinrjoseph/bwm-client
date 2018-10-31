import { Component, OnInit, Input } from '@angular/core';

import { Rental } from '../../_models/rental';

@Component({
  selector: 'rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
  @Input() rental: Rental;

  constructor() {}

  ngOnInit() {
  }
}
