import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if ( this._auth.tokenValid ) this._router.navigate(['/']);
  }
}
