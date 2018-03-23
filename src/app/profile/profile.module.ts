import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AuthModule } from '../auth/auth.module';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';

@NgModule({
  imports: [
    SharedModule,
    AuthModule
  ],
  declarations: [
    ProfileComponent,
    EditPreferencesComponent
  ],
  exports: [],
  providers: []
})
export class ProfileModule { }
