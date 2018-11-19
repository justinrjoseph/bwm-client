// Angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Third-party modules
import { CustomFormsModule } from 'ng2-validation';

// Custom modules
import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Services
import { AuthService } from '../shared/services/auth.service';
import { TokenInterceptor } from '../shared/interceptors/token.interceptor';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
