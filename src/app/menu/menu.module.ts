import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesModule } from '../recipes/recipes.module';
import { IsAdminGuard } from './is-admin.guard';

@NgModule({
  imports: [
    SharedModule,
    RecipesModule
  ],
  declarations: [
    MenuComponent
  ],
  providers: [IsAdminGuard],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
