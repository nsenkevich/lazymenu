import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private recipeService: RecipeService;
  public menu: Observable<Recipe[]>;
  public content: string;

  public constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  public ngOnInit() {
    // this.recipes = this.recipeService.getData()
    this.menu = this.recipeService.getSnapshot();
  }

  public createRecipe() {
    this.recipeService.create(this.content);
    this.content = '';
  }

}
