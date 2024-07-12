import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.shouldbeUnique
      ),
      password: new FormControl('', Validators.required),
    })
  });

  login() {
    // ----------if we had an authentication service----------
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
    //   this.form.setErrors({ invalidLogin: true });
    // }
    // -------------------------------------------------------
    this.form.setErrors({
      invalidLogin: true,
    });
  }
  get username() {
    return this.form.get('account.username');
  }
}
