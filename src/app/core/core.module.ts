// Angular modules
import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {}
