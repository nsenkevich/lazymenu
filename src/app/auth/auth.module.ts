import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent
  ],
  exports: [],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
