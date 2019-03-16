import { Component, Input } from '@angular/core';

import { Rental, Category } from '../../../shared';

@Component({
  selector: 'rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent {
  @Input('rental') rental: Rental;

  Category = Category;
}
