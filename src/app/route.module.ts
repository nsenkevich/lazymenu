import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PageNotFoundPage } from './app/page-not-found.page';
import { MenuComponent } from './recipes/menu/menu.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedInGuard } from './auth/loggedIn.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'auth', component: AuthComponent, canActivate: [LoggedInGuard] },
    { path: 'menu', component: MenuComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', component: PageNotFoundPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
