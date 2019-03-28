import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';

import { Booking, Rental } from '../../../shared';

import { DaterangePickerComponent } from 'ng2-daterangepicker';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from '../../services';
import { AuthService, HelperService } from '../../../shared';

import * as moment from 'moment';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookingComponent implements OnInit {
  @Input('rental') rental: Rental;

  loggedIn = false;
  newBooking: Booking;
  error: string;

  @ViewChild(DaterangePickerComponent)
  private calendar: DaterangePickerComponent;

  private bookedDates: string[] = [];

  private modal: NgbModalRef;

  options = {
    locale: { format: Booking.DATE_FORMAT },
    alwaysShowCalendars: false,
    opens: 'left',
    isInvalidDate: this._checkInvalidDates.bind(this),
    autoUpdateInput: false
  };

  constructor(
    private _auth: AuthService,
    private _modal: NgbModal,
    private _toastr: ToastrService,
    private _helper: HelperService,
    private _booking: BookingService
  ) {}

  ngOnInit(): void {
    this._auth.loggedIn()
      .subscribe((isLoggedIn: boolean) => this.loggedIn = isLoggedIn);

    this.newBooking = new Booking();

    this._getBookedDates();
  }

  get reservationNotReady(): boolean {
    return !this.newBooking.start ||
           !this.newBooking.end ||
           !this.newBooking.guests;
  }

  chooseDates(booking): void {
    this.options.autoUpdateInput = true;

    this.newBooking.start = this._helper.formatBookingDate(booking.start);
    this.newBooking.end = this._helper.formatBookingDate(booking.end);
    this.newBooking.days = booking.end.diff(booking.start, 'days');
    this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  }

  launchConfirmRentalModal(content) {
    this.error = null;

    this.modal = this._modal.open(content);
  }

  confirmBooking(): void {
    this.newBooking.rental = this.rental;

    this._booking.create(this.newBooking)
      .subscribe(
        (booking: Booking) => {
          this._addBookedDates(booking);

          this.newBooking = new Booking();

          this.modal.close();

          this._toastr.success('Booking successful. View details in Manage section.');
        },
        ({ error }: HttpErrorResponse) => this.error = error,
        () => this._resetDatepicker()
      );
  }

  private _getBookedDates(): void {
    const bookings: Booking[] = this.rental.bookings;

    if ( bookings && bookings.length ) {
      const today = moment();

      bookings.forEach((booking) => {
        if ( moment(booking.end).diff(today) > 0 ) {
          const range = this._helper.getBookingDates(booking.start, booking.end);

          this.bookedDates = [...this.bookedDates, ...range];
        }
      });
    }
  }

  private _addBookedDates(booking: Booking): void {
    const range = this._helper.getBookingDates(booking.start, booking.end);

    this.bookedDates = [...this.bookedDates, ...range];
  }

  private _checkInvalidDates(date): boolean {
    return this.bookedDates.includes(this._helper.formatBookingDate(date));
  }

  private _resetDatepicker(): void {
    this.calendar.datePicker.setStartDate(moment());
    this.calendar.datePicker.setEndDate(moment());

    this.calendar.datePicker.element.val('');
  }
}
