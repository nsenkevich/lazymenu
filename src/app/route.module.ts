import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app/app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundPage } from './app/page-not-found.page';
import { RecipeComponent } from './recipe/recipe.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'recipe/:id', component: RecipeComponent},
    {path: '**', pathMatch: 'full', component: PageNotFoundPage},
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule {}
