import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesModule } from '../recipes/recipes.module';
import { MenuService } from './menu.service';

@NgModule({
  imports: [
    SharedModule,
    RecipesModule
  ],
  declarations: [
    MenuComponent
  ],
  providers: [MenuService],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
