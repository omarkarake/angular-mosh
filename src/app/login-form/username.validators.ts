import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  // static will help us to access cannotContainSpace from outside without creating instance of UsernameValidators
  static cannotContainSpace(Control: AbstractControl): ValidationErrors | null {
    if ((Control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }
  static shouldbeUnique(Control: AbstractControl): ValidationErrors | null {
    setTimeout(() => {
      if ((Control.value as string) === 'mosh') return { shouldbeUnique: true };
      return null;
    }, 2000);
    return null;
  }
}
