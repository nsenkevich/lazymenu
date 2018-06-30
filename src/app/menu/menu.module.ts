import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesModule } from '../recipes/recipes.module';

@NgModule({
  imports: [
    SharedModule,
    RecipesModule
  ],
  declarations: [
    MenuComponent
  ],
  providers: [],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
