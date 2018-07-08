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
import { CanReadGuard } from './canread.guard';
import { IsAdminGuard } from './is-admin.guard';

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
  exports: [PreferencesComponent],
  providers: [AuthService, AuthGuard, LoggedInGuard, CanReadGuard, IsAdminGuard]
})
export class AuthModule { }
