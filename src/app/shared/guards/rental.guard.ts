import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { RentalService } from '../../rentals/services';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentalGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _rental: RentalService
  ) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
      const id = next.params.id;

      return this._rental.checkOwner(id)
        .pipe(
          catchError(() => {
            this._router.navigate(['/']);

            return of(false);
          })
        );
  }
}
