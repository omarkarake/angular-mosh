import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  // static will help us to access cannotContainSpace from outside without creating instance of UsernameValidators
  static cannotContainSpace(Control: AbstractControl): ValidationErrors | null {
    if ((Control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }
  static shouldbeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh')
          resolve({
            shouldbeUnique: true,
          });
        else resolve(null);
      }, 2000);
    });
  }
}
