// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';

// Guards
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'rentals', component: RentalListComponent },
  {
    path: 'rentals/:id',
    component: RentalDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule {}
