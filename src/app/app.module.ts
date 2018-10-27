// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom modules
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
