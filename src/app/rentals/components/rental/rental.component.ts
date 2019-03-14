import { Component, OnInit, Input } from '@angular/core';

import { Rental, Category } from '../../../shared';

@Component({
  selector: 'rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
  @Input() rental: Rental;
  Category = Category;

  constructor() {}

  ngOnInit() {
  }
}
