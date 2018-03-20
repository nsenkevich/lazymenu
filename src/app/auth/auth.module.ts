import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AuthGuard } from './auth.guard';
import { LoggedInGuard } from './loggedIn.guard';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    LogInComponent,
    RegistrationComponent,
    PreferencesComponent,
    ForgotPasswordComponent
  ],
  exports: [],
  providers: [AuthService, AuthGuard, LoggedInGuard]
})
export class AuthModule { }
