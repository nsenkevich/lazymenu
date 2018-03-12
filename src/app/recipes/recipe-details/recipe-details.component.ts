import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  recipeId: string;
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.route.params.subscribe(params => this.recipeId = params.id);

    this.recipe = this.recipeService.getRecipe(this.recipeId).valueChanges();
    console.log(this.recipe);

  }

}
