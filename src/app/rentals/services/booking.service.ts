import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Booking } from '../../shared';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookingsAPI = environment.bookingsAPI;

  constructor(private _http: HttpClient) {}

  getAll(): Observable<Booking[]> {
    return this._http.get<Booking[]>(this._bookingsAPI);
  }

  getAllForUser(): Observable<Booking[]> {
    return this._http.get<Booking[]>(`${this._bookingsAPI}/manage`);
  }

  getOne(id: string): Observable<Booking> {
    return this._http.get<Booking>(`${this._bookingsAPI}/${id}`);
  }

  create(booking: Booking): Observable<Booking> {
    return this._http.post<Booking>(this._bookingsAPI, booking);
  }
}
