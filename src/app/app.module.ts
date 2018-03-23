import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './route.module';
import { AppComponent } from './app/app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';

import { ProfileComponent } from './profile/profile.component';
import { PaymentModule } from './payment/payment.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    RecipesModule,
    AuthModule,
    PaymentModule,
    ProfileModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
