import { RecipeService } from '../recipes/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';
import { RecipeImporter } from '../recipes/recipe.importer';
import { MenuStatus } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private recipesLimit: number;
  private menuStatus: string;
  public menu: Observable<Recipe[]>;
  public content: string;

  public constructor(private recipeService: RecipeService, private recipeImporter: RecipeImporter) {
    this.menuStatus = (MenuStatus as any).Current.value;
    this.recipesLimit = 5;
  }

  public ngOnInit() {
    // this.recipeImporter.getData('recipes').subscribe((res: any) => {
    //   this.recipeImporter.run(res);
    // });
    this.menu = this.recipeService.getData(this.menuStatus, this.recipesLimit);
  }

}
