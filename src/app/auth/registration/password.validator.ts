import {AbstractControl} from '@angular/forms';
export class PasswordValidator {

    static createValidator(control: AbstractControl) {
        if (control.get('password').value === control.get('passwordCopy').value) {
            return null;
        } else {
            control.get('passwordCopy').setErrors( {matchPassword: true});
        }
    }
}

