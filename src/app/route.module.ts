import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app/app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './app/page-not-found.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: '**', pathMatch: 'full', component: PageNotFoundComponent},
    {path: 'recipe/:id', component: RecipeComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule {}
