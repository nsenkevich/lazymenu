import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  public forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForgotPasswordForm();
  }

  private createForgotPasswordForm(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  public resetPassword(): void {
    if (this.forgotPasswordForm.valid) {
      this.submitted.emit(this.forgotPasswordForm.value.email);
      this.forgotPasswordForm.disable();
      setTimeout(() => {
        this.forgotPasswordForm.reset();
        this.forgotPasswordForm.enable();
      }, 5000);
    }
  }

}
