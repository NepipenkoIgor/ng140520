import { Directive } from '@angular/core';
import {  FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUsernameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements Validator {
  public validate({value}: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {
        onlyLetters: 'You should use only letters'
      };
  }
}
