// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ManageRentalComponent, ManageBookingComponent } from './components';

// Guards
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'manage', children: [
    { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard], children: [
      { path: 'rentals', component: ManageRentalComponent },
      { path: 'bookings', component: ManageBookingComponent },
    ] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {}
