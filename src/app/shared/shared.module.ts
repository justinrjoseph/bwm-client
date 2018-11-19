// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    NgPipesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwLpqe7fiPXkPK72N0xe2j0O5nXCIi-s0'
    })
  ],
  declarations: [MapComponent],
  providers: [MapService],
  exports: [
    CommonModule,
    MapComponent,
    UcWordsPipe
  ]
})
export class SharedModule {}
