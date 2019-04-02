import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { Coordinates } from '../../';

import { GoogleMap } from '@agm/core/services/google-maps-types';

import { MapService } from '../../../shared/services';

import { RentalService } from '../../../rentals/services';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  @Input('location') location: string;

  lat: number;
  lng: number;
  invalidMap: boolean;
  subscription: Subscription;

  constructor(
    private _map: MapService,
    private _cd: ChangeDetectorRef,
    private _rental: RentalService
  ) {}

  ngOnInit(): void {
    this.subscription = this._rental.newLocation
      .subscribe((location: string) => {
        this.location = location;

        this.getCoordinates();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCoordinates(map?: GoogleMap) {
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
