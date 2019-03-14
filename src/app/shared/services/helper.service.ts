import { Injectable } from '@angular/core';

import { Booking } from '../models';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  getBookingDates(startAt: string, endAt: string): string[] {
    return this._getDateRange(startAt, endAt);
  }

  formatBookingDate(date): string {
    return this._formatDate(date, Booking.DATE_FORMAT);
  }

  private _getDateRange(startAt: string, endAt: string): string[] {
    let start = moment(startAt);
    let end = moment(endAt);

    let dates = [start.format('MM/DD/YYYY')];

    while ( start < end ) {
      start = start.add(1, 'day');

      dates = [...dates, start.format('MM/DD/YYYY')];
    }

    return dates;
  }

  private _formatDate(date: string, format: string): string {
    return moment(date).format(format);
  }
}
