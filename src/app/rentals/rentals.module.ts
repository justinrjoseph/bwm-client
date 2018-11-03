// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third-party modules
import { NgPipesModule } from 'ngx-pipes';

// Custom modules
import { RentalRoutingModule } from './rental-routing.module';

// Components, pipes
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental/rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RentalRoutingModule,
    NgPipesModule
  ],
  declarations: [
    RentalListComponent,
    RentalComponent,
    RentalDetailComponent
  ]
})
export class RentalsModule {}
