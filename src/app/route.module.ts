import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
    {
      path: '',
      component: AppComponent
    },
    {
      path: 'menu',
      component: MenuComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule {}
