import { Component, OnInit } from '@angular/core';

import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

import { AuthService } from '../../../shared';

import { Router, ActivatedRoute } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  form: FormGroup;
  errors: string;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    const loggedOut = this._route.snapshot.queryParams.loggedOut;

    if ( loggedOut ) this.message = 'Logged out successfully';

    this.form = this._fb.group({
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this._auth.login(this.form.value)
      .subscribe(
        (result: boolean) => {
          if ( result ) {
            this._router.navigate(['/rentals'], { queryParams: {
              loggedIn: true
            } });
          }
        },
        ({ error }: HttpErrorResponse) => this.errors = error
      );
  }

  // Email
  get email(): AbstractControl {
    return this.form.get('email');
  }

  get emailInvalid(): boolean {
    return this.email.touched && this.email.invalid;
  }

  get emailRequired(): boolean {
    return this.email.errors.required;
  }

  get emailInvalidFormat(): boolean {
    return this.email.errors.email;
  }

  // Password
  get password(): AbstractControl {
    return this.form.get('password');
  }

  get passwordInvalid(): boolean {
    return this.password.touched && this.password.invalid;
  }

  get passwordRequired(): boolean {
    return this.passwordInvalid && this.password.errors.required;
  }
}
