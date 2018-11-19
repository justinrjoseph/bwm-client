// Angular modules
import { NgModule } from '@angular/core';

// Third-party modules
import { Daterangepicker } from 'ng2-daterangepicker';

// Custom modules
import { RentalRoutingModule } from './rental-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components, pipes
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  imports: [
    RentalRoutingModule,
    SharedModule,
    Daterangepicker
  ],
  declarations: [
    RentalListComponent,
    RentalComponent,
    RentalDetailComponent,
    BookingComponent
  ]
})
export class RentalsModule {}
