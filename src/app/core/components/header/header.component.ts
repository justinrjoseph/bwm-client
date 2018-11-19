import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/models/user';

import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  user: User;

  constructor(private _auth: AuthService) {}

  ngOnInit() {
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

  logout() {
    this._auth.logout();
  }
}
