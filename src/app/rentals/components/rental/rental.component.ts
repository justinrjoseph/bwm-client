import { Component, OnInit, Input } from '@angular/core';

import { Rental } from '../../../shared/models/rental';
import { Category } from '../../../shared/models/category.enum';

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
