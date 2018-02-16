import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
    {
      path: '',
      component: MenuComponent
    },
    {
      path: 'menu',
      component: MenuComponent
    },
    {
      path: 'registration',
      component: RegistrationComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule {}
