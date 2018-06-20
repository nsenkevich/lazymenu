
import { NgModule } from '@angular/core';
import { RecipeService } from './recipe.service';
import { RecipeImporter } from './recipe.importer';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RecipeComponent,
    RecipeDetailsComponent
  ],
  exports: [
    RecipeComponent,
    RecipeDetailsComponent
  ],
  providers: [RecipeService, RecipeImporter],
})
export class RecipesModule { }
