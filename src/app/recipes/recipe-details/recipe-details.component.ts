import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit {
  public recipeId: string;
  public recipe: any;
  private route: ActivatedRoute;
  private recipeService: RecipeService;

  public constructor(route: ActivatedRoute, recipeService: RecipeService) {
    this.recipeService = recipeService;
    this.route = route;
  }

  public ngOnInit() {
    this.route.params.subscribe(params => this.recipeId = params.id);
    this.recipe = this.recipeService.getRecipe(this.recipeId).valueChanges();
  }

}