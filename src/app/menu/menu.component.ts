import { RecipeService } from '../recipes/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';
import { RecipeImporter } from '../recipes/recipe.importer';
import { MenuStatus } from './menu.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private recipesLimit: number;
  private menuStatus: string;
  public menu: Observable<Recipe[]>;

  public constructor(private recipeService: RecipeService, private recipeImporter: RecipeImporter, private route: ActivatedRoute) {
    this.menuStatus = (MenuStatus as any).Current.value;
    this.recipesLimit = 5;
  }

   ngOnInit() {
    // this.setMenu();
    const params = this.route.snapshot.url;
    this.menuStatus = params[0].path;
    this.recipesLimit = Number(params[1].path);
    this.getMenu(this.menuStatus, this.recipesLimit);
  }

  private getMenu(menuStatus: string, numberOfRecipes: number): void {
    this.menu = this.recipeService.getData(menuStatus, numberOfRecipes);
  }

  private setMenu(): void {
    this.recipeImporter.getData('recipes').subscribe((res: any) => {
        this.recipeImporter.run(res);
      });
  }

}
