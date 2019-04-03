// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Third-party modules
import { NgPipesModule, UcWordsPipe } from 'ngx-pipes';
import { AgmCoreModule } from '@agm/core';
import { StarRatingModule, StarRatingComponent } from 'angular-star-rating';

// Components
import {
  sharedComponents,
  MapComponent,
  InputEditWidgetComponent,
  TextareaEditWidgetComponent,
  SelectEditWidgetComponent
} from './components';

// Services
import { MapService } from './services/map.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgPipesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwLpqe7fiPXkPK72N0xe2j0O5nXCIi-s0'
    }),
    StarRatingModule.forRoot()
  ],
  declarations: [...sharedComponents],
  providers: [MapService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingComponent,
    MapComponent,
    InputEditWidgetComponent,
    TextareaEditWidgetComponent,
    SelectEditWidgetComponent,
    UcWordsPipe
  ]
})
export class SharedModule {}
