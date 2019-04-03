// Angular modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

// Custom modules
import { ManageRoutingModule } from './manage-routing.module';

// Components
import { manageComponents } from './components';

@NgModule({
  imports: [
    SharedModule,
    ManageRoutingModule
  ],
  declarations: [...manageComponents]
})
export class ManageModule {}
