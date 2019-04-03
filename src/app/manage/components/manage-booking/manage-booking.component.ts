import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { Booking, ReviewCreatedEvent } from '../../../shared';

import { BookingService } from '../../../rentals/services';

import * as moment from 'moment';

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

  reviewable(booking: Booking): boolean {
    const now = moment(),
          bookingEnd = moment(booking.end);

    return !booking.review && ( bookingEnd.isBefore(now) );
  }

  refreshReviews(payload: ReviewCreatedEvent): void {
    const { bookingId, review } = payload;

    this.bookings = this.bookings.map((booking) => {
      if ( booking._id === bookingId ) booking.review = review;

      return booking;
    });
  }
}
