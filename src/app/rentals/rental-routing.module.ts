// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {
  RentalListComponent,
  RentalDetailComponent,
  RentalsFilterComponent
} from './components';

// Guards
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'rentals', children: [
    { path: '', component: RentalListComponent },
    {
      path: ':id',
      component: RentalDetailComponent,
      canActivate: [AuthGuard]
    },
    { path: ':city/results', component: RentalsFilterComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule {}
