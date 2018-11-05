// Angular modules
import { NgModule } from '@angular/core';

// Custom modules
import { RentalRoutingModule } from './rental-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components, pipes
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental/rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

@NgModule({
  imports: [
    RentalRoutingModule,
    SharedModule
  ],
  declarations: [
    RentalListComponent,
    RentalComponent,
    RentalDetailComponent
  ]
})
export class RentalsModule {}
