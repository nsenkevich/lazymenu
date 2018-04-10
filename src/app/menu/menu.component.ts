import { RecipeService } from '../recipes/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecipeImporter } from '../recipes/recipe.importer';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private recipeService: RecipeService;
  private recipeImporter: RecipeImporter;
  public menu: Observable<Recipe[]>;
  public content: string;

  public constructor(recipeService: RecipeService, recipeImporter: RecipeImporter) {
    this.recipeService = recipeService;
    this.recipeImporter = recipeImporter;
  }

  public ngOnInit() {
    // this.recipeImporter.run(this.recipeImporter.getData());
    this.menu = this.recipeService.getSnapshot();
  }

}
