import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  AbstractControl,
  FormGroup,
  Validators,
  ValidationErrors
} from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

import { AuthService } from '../../../shared';

import { Router } from '@angular/router';

import { PasswordValidators } from '../../validators/password-validators';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errors: string;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      name: ['', [
        Validators.minLength(4),
        Validators.maxLength(32),
      ]],
      email: ['', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(255),
        CustomValidators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      passwordConfirmation: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    }, { validator: PasswordValidators.mustMatch });
  }

  register(): void {
    this._auth.register(this.form.value)
      .subscribe(
        () => this._router.navigate(['/rentals'], { queryParams:
          { registered: true }
        }),
        ({ error }: HttpErrorResponse) => this.errors = error
      );
  }

  // Username
  get name(): AbstractControl {
    return this.form.get('name');
  }

  get nameInvalid(): boolean {
    return this.name.touched && this.name.invalid;
  }

  get nameMinlengthError(): boolean {
    return this.name.errors.minlength;
  }

  get nameMaxlengthError(): boolean {
    return this.name.errors.maxlength;
  }

  get nameMinlengthReq(): number {
    return this.name.errors.minlength.requiredLength;
  }

  get nameMaxlengthAllowed(): number {
    return this.name.errors.maxlength.requiredLength;
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

  get emailMinlengthError(): boolean {
    return this.email.errors.minlength;
  }

  get emailMaxlengthError(): boolean {
    return this.email.errors.maxlength;
  }

  get emailMinlengthReq(): number {
    return this.email.errors.minlength.requiredLength;
  }

  get emailMaxlengthAllowed(): number {
    return this.email.errors.maxlength.requiredLength;
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
    return this.password.errors.required;
  }

  get passwordMinlengthError(): boolean {
    return this.password.errors.minlength;
  }

  get passwordMinlengthReq(): number {
    return this.password.errors.minlength.requiredLength;
  }

  // Password Confirmation
  get passwordConfirmation(): AbstractControl {
    return this.form.get('passwordConfirmation');
  }

  get passwordConfirmationInvalid(): boolean {
    return this.passwordConfirmation.touched &&
           this.passwordConfirmation.invalid;
  }

  get passwordConfirmationRequired(): boolean {
    return this.passwordConfirmation.errors.required;
  }

  get passwordConfirmationMinlengthError(): boolean {
    return this.passwordConfirmation.errors.minlength;
  }

  get passwordConfirmationMinlengthReq(): number {
    return this.passwordConfirmation.errors.minlength.requiredLength;
  }

  // Password & Password Confirmation
  get passwordsMismatched(): ValidationErrors {
    return this.passwordConfirmation.touched && this.form.errors;
  }
}
