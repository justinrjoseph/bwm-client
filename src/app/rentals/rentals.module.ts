// Angular modules
import { NgModule } from '@angular/core';

// Third-party modules
import { Daterangepicker } from 'ng2-daterangepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom modules
import { RentalRoutingModule } from './rental-routing.module';
import { SharedModule } from '../shared';

// Components
import { rentalComponents } from './components';

@NgModule({
  imports: [
    RentalRoutingModule,
    SharedModule,
    Daterangepicker,
    NgbModule
  ],
  declarations: [...rentalComponents]
})
export class RentalsModule {}
