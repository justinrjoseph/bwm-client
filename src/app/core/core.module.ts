// Angular modules
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Third-party modules
import { CustomFormsModule } from 'ng2-validation';

// Custom modules
import { SharedModule } from './../shared';
import { CoreRoutingModule } from './core-routing.module';

// Components
import { coreComponents, HeaderComponent } from './components';

// Services
import { AuthService } from '../shared';
import { TokenInterceptor } from '../shared/interceptors/token.interceptor';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    CustomFormsModule
  ],
  declarations: [...coreComponents],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
