import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Rental } from '../_models/rental';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentalsApi = environment.rentalsApi;

  constructor(private _http: HttpClient) {}

  getAll(): Observable<Rental[]> {
    return this._http.get<Rental[]>(this.rentalsApi);
  }

  getOne(id: string): Observable<Rental> {
    return this._http.get<Rental>(`${this.rentalsApi}/${id}`);
  }
}
