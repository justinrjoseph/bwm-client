import { Component, Input, ChangeDetectorRef } from '@angular/core';

import { LatLng } from '@agm/core';

import { MapService } from '../../services/map.service';

import { GoogleMap } from '@agm/core/services/google-maps-types';

import { Coordinates } from '../../models/Coordinates';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @Input() location: string;

  lat: number;
  lng: number;
  invalidMap: boolean;

  constructor(private _map: MapService, private _cd: ChangeDetectorRef) {}

  getCoordinates(map: GoogleMap) {
    if ( map ) {
      this._map.getGeocodeLocation(this.location)
        .subscribe(
          (coords: Coordinates) => {
            const { lat, lng } = coords;

            this.lat = lat;
            this.lng = lng;

            this._cd.detectChanges();
          },
          () => this.invalidMap = true
        );
    }
  }
}
