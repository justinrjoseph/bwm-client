import { Component, Input } from '@angular/core';

import { Booking } from '../../../shared';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {
  @Input('bookings') bookings: Booking[] = [];

  constructor(public modal: NgbModal) {}
}
