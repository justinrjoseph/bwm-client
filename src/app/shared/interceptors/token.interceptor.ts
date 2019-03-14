import { Injectable } from '@angular/core';

import { AuthService } from '../../shared';

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( this._auth.token ) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._auth.token}`
        }
      });
    }

    return next.handle(req);
  }
}
