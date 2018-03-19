import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AuthGuard } from './auth.guard';
import { LogedinGuard } from './logedin.guard';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    LogInComponent,
    RegistrationComponent
  ],
  exports: [],
  providers: [AuthService, AuthGuard, LogedinGuard]
})
export class AuthModule { }
