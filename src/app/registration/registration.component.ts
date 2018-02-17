import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public registrationForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.createForm();
  }

  private createForm() {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', [ Validators.required, Validators.minLength(5)]],
      passwordCopy: ['', [Validators.required, Validators.minLength(5), this.checkPassword]]
    });
  }

  public register() {
    console.log(this.registrationForm.status);
    console.log(this.registrationForm.value);
  }

  public checkPassword = (control): Observable<{[key: string]: string }> => {
if (!control || !control.value || !control.value.length) {
  return null;
 }

if (control.value !== this.registrationForm.value.password) {
  return Observable.create({ PasswordMatch: 'Fields do not match' });
}
  }

  public passwordMatch(formValues: any): boolean {
    console.log('formValues')
    console.log(formValues)
    return false;
  }

}
