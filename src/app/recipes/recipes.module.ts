import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';
import { RecipeImporter } from './recipe.importer';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  declarations: [
    MenuComponent,
    RecipeComponent,
    RecipeDetailsComponent,
  ],
  providers: [RecipeService, RecipeImporter],
})
export class RecipesModule { }
