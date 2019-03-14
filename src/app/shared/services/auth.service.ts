import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/user';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Jwt } from '../models/jwt';

@Injectable()
export class AuthService {
  private _usersAPI = environment.usersAPI;
  private _authAPI = environment.authAPI;

  private _jwtHelper = new JwtHelperService();
  private _loggedIn = new BehaviorSubject<boolean>(false);;

  constructor(private _http: HttpClient, private _router: Router) {}

  register(user: User): Observable<boolean> {
    return this._processUser(this._usersAPI, user);
  }

  login(user: User): Observable<boolean> {
    return this._processUser(this._authAPI, user);
  }

  logout(): void {
    localStorage.removeItem('token');

    this._updateLoggedInStatus(false);

    this._router.navigate(['/login'], { queryParams: {
      loggedOut: true
    } });
  }

  loggedIn(): Observable<boolean> {
    this._updateLoggedInStatus(this.tokenValid);

    return this._loggedIn.asObservable();
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get tokenValid(): boolean {
    const token = this.token;

    if ( !token ) return false;

    return !this._jwtHelper.isTokenExpired(token);
  }

  get currentUser(): User | null {
    if ( !this.token ) return null;

    return this._jwtHelper.decodeToken(this.token);
  }

  private _processUser(url, user): Observable<boolean> {
    return this._http.post<Jwt>(url, user)
      .pipe(
        map((response: Jwt) => {
          if ( response && response.token ) {
            localStorage.setItem('token', response.token);

            this._updateLoggedInStatus(true);
            return true;
          }

          this._updateLoggedInStatus(false);
          return false;
        }
      ));
  }

  private _updateLoggedInStatus(status): void {
    this._loggedIn.next(status);
  }
}
