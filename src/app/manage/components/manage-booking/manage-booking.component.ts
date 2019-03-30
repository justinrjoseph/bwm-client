import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { Booking } from '../../../shared';

import { BookingService } from '../../../rentals/services';

@Component({
  selector: 'manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss']
})
export class ManageBookingComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private _bookingService: BookingService) {}

  ngOnInit() {
    this._bookingService.getAllForUser()
      .subscribe(
        (bookings: Booking[]) => this.bookings = bookings,
        ({ error }: HttpErrorResponse) => {}
      )
  }
}
