import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipeId: string;

  @Input()
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.route.params.subscribe(params => this.recipeId = params.id);
  }

  addHeartToRecipe(val: number) {
    if (this.recipe.id) {
      this.recipeService.updateRecipe(this.recipe.id, { hearts: val + 1 });
    } else {
      console.error('recipe missing ID!');
    }
  }

  deleteRecipe(id: string) {
    this.recipeService.deleteRecipe(id);
  }
}
