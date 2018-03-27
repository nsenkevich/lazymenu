import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AuthModule } from '../auth/auth.module';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { PaymentModule } from '../payment/payment.module';

@NgModule({
  imports: [
    SharedModule,
    AuthModule,
    ReactiveFormsModule,
    PaymentModule
  ],
  declarations: [
    ProfileComponent,
    EditPreferencesComponent,
    AddressComponent,
    EditAddressComponent
  ],
  exports: [],
  providers: []
})
export class ProfileModule { }
