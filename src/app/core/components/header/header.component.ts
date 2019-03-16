import { Component, OnInit } from '@angular/core';

import { User, AuthService } from '../../../shared';

import { Router } from '@angular/router';

@Component({
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  user: User;

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._auth.loggedIn()
      .subscribe(
        (isLoggedIn: boolean) => {
          this.loggedIn = isLoggedIn;

          if ( isLoggedIn ) {
            this.user = this._auth.currentUser;
          }
        }
      );
  }

  logout(): void {
    this._auth.logout();
  }

  filter(city: string) {
    this._router.navigate([`/rentals/${city}/results`]);
  }
}
