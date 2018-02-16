import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      passWord: ['', Validators.required],
      passWordCopy: ['', Validators.required]
    });
  }

  public register() {
    console.log(this.registrationForm.status);
    console.log(this.registrationForm);
  }
}
