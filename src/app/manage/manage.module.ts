// Angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

// Custom modules
import { ManageRoutingModule } from './manage-routing.module';

// Components
import { manageComponents } from './components';
import { BookingsComponent } from './components/bookings/bookings.component';

@NgModule({
  imports: [
    SharedModule,
    ManageRoutingModule
  ],
  declarations: [...manageComponents, BookingsComponent]
})
export class ManageModule {}
