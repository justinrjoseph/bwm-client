import { FormGroup, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static mustMatch(form: FormGroup): ValidationErrors | null {
    const password = form.get('password').value;
    const passwordConfirmation = form.get('passwordConfirmation').value;

    return password === passwordConfirmation
      ? null
      : { mismatchedPasswords: true };
  }
}
