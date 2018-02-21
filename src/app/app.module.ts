import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './route.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app/app.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe/recipe.component';
import { PageNotFoundPage } from './app/page-not-found.page';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrationComponent,
    RecipeComponent,
    PageNotFoundPage,
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
