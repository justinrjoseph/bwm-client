import { Injectable } from '@angular/core';

import { Observable, Observer, of } from 'rxjs';

import { Location } from '../models/location';
import { Coordinates } from '../models/coordinates';

declare const google;

@Injectable()
export class MapService {
  private _geocoder;
  private _locationCache: Location = {};

  getGeocodeLocation(location: string): Observable<Coordinates> {
    if ( this._locationCached(location) ) return of(this._locationCache[location]);

    return this._geocodeLocation(location);
  }

  private _geocodeLocation(rentalLocation: string): Observable<Coordinates> {
    if ( !this._geocoder ) this._geocoder = new google.maps.Geocoder();

    return new Observable((observer: Observer<Coordinates>) => {
      this._geocoder.geocode({ address: rentalLocation }, (res, status) => {
        if ( status === 'OK' ) {
          const { location } = res[0].geometry;

          const coordinates = { lat: location.lat(), lng: location.lng() };

          this._cacheLocation(rentalLocation, coordinates);

          observer.next(coordinates);
        } else {
          observer.error(`There was a problem with geocoding.`);
        }
      });
    })
  }

  private _cacheLocation(location: string, coords: Coordinates): void {
    this._locationCache[location] = coords;
  }

  private _locationCached(location: string): boolean {
    return this._locationCache.hasOwnProperty(location);
  }
}
