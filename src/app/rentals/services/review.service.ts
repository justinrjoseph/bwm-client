import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Review } from '../../shared/models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private _reviewsAPI = environment.reviewsAPI;

  constructor(private _http: HttpClient) {}

  create(bookingId: string, review: Review): Observable<Review> {
    const params = new HttpParams()
      .set('bookingId', bookingId);

    return this._http.post<Review>(this._reviewsAPI, review, { params });
  }

  getAll(rentalId: string): Observable<Review[]> {
    const params = new HttpParams()
      .set('rentalId', rentalId);

    return this._http.get<Review[]>(this._reviewsAPI, { params });
  }
}
