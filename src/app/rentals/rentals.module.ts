// Angular modules
import { NgModule } from '@angular/core';

// Components
import { RentalListComponent } from './rental-list/rental-list.component';

@NgModule({
  declarations: [RentalListComponent],
  exports: [RentalListComponent]
})
export class RentalsModule {}
