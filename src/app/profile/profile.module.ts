import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AuthModule } from '../auth/auth.module';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    AuthModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    EditPreferencesComponent,
    AddressComponent
  ],
  exports: [],
  providers: []
})
export class ProfileModule { }
