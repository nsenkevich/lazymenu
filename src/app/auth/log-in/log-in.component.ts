import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

export interface LogInDetails {
  email: string;
  password: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  @Output() submitted = new EventEmitter<LogInDetails>();

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public logIn(): void {
    if (this.loginForm.valid) {
      this.submitted.emit({ email: this.loginForm.value.email, password: this.loginForm.value.password });
      this.loginForm.disable();
    }
  }

  public get email() {
    return this.loginForm.get('email');
  }

  public get password() {
    return this.loginForm.get('password');
  }

}
