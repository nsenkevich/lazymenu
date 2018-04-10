import { map, take, debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, AbstractControl, Validator } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

export class EmailValidator {

   static createValidator(afs: AngularFirestore) {
    return (control: AbstractControl) => {
        const email = control.value.toLowerCase();
        return afs.collection('users', ref => ref.where('email', '==', email) )
          .valueChanges().pipe(
            debounceTime(500),
            take(1),
            map(arr => arr.length ? { emailTaken: true } : null ));
          };
  }
}
