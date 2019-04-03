import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Rental } from '../../shared';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private _rentalsAPI = environment.rentalsAPI;
  locationSubject = new Subject<string>();

  constructor(private _http: HttpClient) {}

  get newLocation(): Observable<string> {
    return this.locationSubject.asObservable();
  }

  getAll(): Observable<Rental[]> {
    return this._http.get<Rental[]>(this._rentalsAPI);
  }

  getAllForUser(): Observable<Rental[]> {
    return this._http.get<Rental[]>(`${this._rentalsAPI}/manage`);
  }

  getOne(id: string): Observable<Rental> {
    return this._http.get<Rental>(`${this._rentalsAPI}/${id}`);
  }

  create(rental: Rental): Observable<Rental> {
    return this._http.post<Rental>(this._rentalsAPI, rental);
  }

  update(id: string, update: Partial<Rental>): Observable<Rental> {
    return this._http.patch<Rental>(`${this._rentalsAPI}/${id}`, update);
  }

  delete(id: string): Observable<Rental> {
    return this._http.delete<Rental>(`${this._rentalsAPI}/${id}`);
  }

  filter(city: string): Observable<Rental[]> {
    const params = new HttpParams()
      .set('city', city);

    return this._http.get<Rental[]>(this._rentalsAPI, { params });
  }

  checkOwner(id: string): Observable<boolean> {
    return this._http.get<boolean>(`${this._rentalsAPI}/${id}/check-owner`);
  }

  changeLocation(location: string): void {
    this.locationSubject.next(location);
  }
}
