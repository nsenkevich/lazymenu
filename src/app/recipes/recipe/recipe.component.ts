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

  @Input()
  recipe: Recipe;

  public constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  public ngOnInit() {
    console.log(this.recipe);
    // this.route.params.subscribe(params => this.recipeId = params.id);
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
