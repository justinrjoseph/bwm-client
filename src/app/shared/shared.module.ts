// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Third-party modules
import { NgPipesModule, UcWordsPipe } from 'ngx-pipes';
import { AgmCoreModule } from '@agm/core';

// Components
import { MapComponent } from './components/map/map.component';

// Services
import { MapService } from './services/map.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgPipesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwLpqe7fiPXkPK72N0xe2j0O5nXCIi-s0'
    })
  ],
  declarations: [MapComponent],
  providers: [MapService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MapComponent,
    UcWordsPipe
  ]
})
export class SharedModule {}
