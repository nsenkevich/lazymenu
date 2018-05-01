import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesModule } from '../recipes/recipes.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RecipesModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
