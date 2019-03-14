// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third-party modules
import { ToastrModule } from 'ngx-toastr';

// Custom modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { RentalsModule } from './rentals/rentals.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    RentalsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
