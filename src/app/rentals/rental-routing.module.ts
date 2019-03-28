// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {
  RentalListComponent,
  RentalDetailComponent,
  RentalsFilterComponent,
  RentalCreateComponent
} from './components';

// Guards
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'rentals', children: [
    { path: '', component: RentalListComponent },
    { path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RentalDetailComponent },
    { path: ':city/results', component: RentalsFilterComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule {}
