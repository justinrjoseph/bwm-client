import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @Input('dailyRate') dailyRate: number;

  dateRange: any = {};
  options = {
    locale: { format: 'MM/DD/YYYY' },
    alwaysShowCalendars: false,
    opens: 'left'
  };

  constructor() { }

  ngOnInit() {
  }

  chooseDates(value, datepicker?) {
    console.log(value);
    datepicker.start = this.dateRange.start = value.start;
    datepicker.end = this.dateRange.end = value.end;

    this.dateRange.label = value.label;
  }
}
