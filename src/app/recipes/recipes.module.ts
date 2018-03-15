
import { NgModule } from '@angular/core';
import { RecipeService } from './recipe.service';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MenuComponent,
    RecipeComponent,
    RecipeDetailsComponent
  ],
  providers: [RecipeService],
})
export class RecipesModule { }
