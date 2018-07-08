import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PageNotFoundPage } from './app/page-not-found.page';

import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedInGuard } from './auth/loggedIn.guard';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { PlansComponent } from './plans/plans.component';
import { HowComponent } from './plans/how/how.component';
import { IsAdminGuard } from './auth/is-admin.guard';
import { CanReadGuard } from './auth/canread.guard';

const routes: Routes = [
    { path: 'auth', component: AuthComponent, canActivate: [LoggedInGuard] },
    { path: '', redirectTo: '/menu/current/5', pathMatch: 'full' },
    { path: 'menu', redirectTo: '/menu/current/5', pathMatch: 'full' },
    {
        path: 'menu', children: [
            { path: 'current/:limit', component: MenuComponent },
            { path: 'next/:limit', component: MenuComponent, canActivate: [CanReadGuard] },
            { path: 'pending/:limit', component: MenuComponent, canActivate: [IsAdminGuard] }
        ]
    },
    { path: 'plans', component: PlansComponent },
    { path: 'how', component: HowComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', component: PageNotFoundPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
