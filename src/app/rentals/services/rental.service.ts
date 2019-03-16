import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Rental } from '../../shared';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentalsAPI = environment.rentalsAPI;

  constructor(private _http: HttpClient) {}

  getAll(): Observable<Rental[]> {
    return this._http.get<Rental[]>(this.rentalsAPI);
  }

  getOne(id: string): Observable<Rental> {
    return this._http.get<Rental>(`${this.rentalsAPI}/${id}`);
  }

  filter(city: string): Observable<Rental[]> {
    const params = new HttpParams()
      .set('city', city);

    return this._http.get<Rental[]>(this.rentalsAPI, { params });
  }
}
