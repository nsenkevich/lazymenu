import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  private recipeId: string;
  private recipeService: RecipeService;
  private route: ActivatedRoute;

  @Input()
  recipe: Recipe;

  public constructor(route: ActivatedRoute, recipeService: RecipeService) {
    this.route = route;
    this.recipeService = recipeService;
  }

  public ngOnInit() {
    this.route.params.subscribe(params => this.recipeId = params.id);
  }

  public addLikeToRecipe(val: number) {
    if (this.recipe.id) {
      this.recipeService.updateRecipe(this.recipe.id, { likes: val + 1 });
    } else {
      console.error('recipe missing ID!');
    }
  }

  public deleteRecipe(id: string) {
    this.recipeService.deleteRecipe(id);
  }
}
