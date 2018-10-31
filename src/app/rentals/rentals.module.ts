// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { RentalRoutingModule } from './rental-routing.module';

// Components
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental/rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RentalRoutingModule
  ],
  declarations: [
    RentalListComponent,
    RentalComponent,
    RentalDetailComponent
  ]
})
export class RentalsModule {}
