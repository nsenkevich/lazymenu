import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EmailValidator } from './email.validator';
import { AngularFirestore } from 'angularfire2/firestore';
import { PasswordValidator } from './password.validator';

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

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  private createRegistrationForm(): void {
    // , EmailValidator.createValidator(this.afs)
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordCopy: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validator: PasswordValidator.createValidator
      });
  }

  public register(): void {
    if (this.registrationForm.valid) {
      this.submitted.emit({ email: this.registrationForm.value.email, password: this.registrationForm.value.password });
      this.registrationForm.disable();
    }
  }

  public get email() {
    return this.registrationForm.get('email');
  }

  public get password() {
    return this.registrationForm.get('password');
  }

  public get passwordCopy() {
    return this.registrationForm.get('passwordCopy');
  }
}
