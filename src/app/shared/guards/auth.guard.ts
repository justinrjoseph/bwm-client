import { Injectable } from '@angular/core';

import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(next, state: RouterStateSnapshot): boolean {
    if ( state.url === '/login' ) {
      if ( !this._auth.tokenValid ) return true;

      this._router.navigate(['/rentals']);
      return false;
    }

    if ( this._auth.tokenValid ) return true;

    this._router.navigate(['/login']);
    return false;
  }
}
