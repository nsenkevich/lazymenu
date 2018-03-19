import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export interface RegistrationDetails {
  email: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Output() submitted = new EventEmitter<RegistrationDetails>();
  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  private createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordCopy: ['', [Validators.required, Validators.minLength(6), this.checkPassword]]
    });
  }

  private checkPassword = (control): Observable<{ [key: string]: string }> => {
    if (!control || !control.value || !control.value.length) {
      return null;
    }
    if (control.value !== this.registrationForm.value.password) {
      return Observable.create({ PasswordMatch: 'Fields do not match' });
    }
  }

  public register(): void {
    if (this.registrationForm.valid) {
      this.submitted.emit({ email: this.registrationForm.value.email, password: this.registrationForm.value.password });
      this.registrationForm.reset();
      this.registrationForm.markAsUntouched();
    }
  }

}
