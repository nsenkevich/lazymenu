
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './route.module';
import { AppComponent } from './app/app.component';

import { CoreModule } from './core/core.module';

import { RecipesModule } from './recipes/recipes.module';

import { PaymentModule } from './payment/payment.module';
import { ProfileModule } from './profile/profile.module';
import { MenuModule } from './menu/menu.module';
import { PlansModule } from './plans/plans.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RecipesModule,
    PaymentModule,
    ProfileModule,
    MenuModule,
    PlansModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
