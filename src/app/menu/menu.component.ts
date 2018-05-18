
import { RecipeService } from '../recipes/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';
import { RecipeImporter } from '../recipes/recipe.importer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public menu: Observable<Recipe[]>;
  public content: string;

  public constructor(private recipeService: RecipeService, private recipeImporter: RecipeImporter) { }

  public ngOnInit() {
    // this.recipeImporter.getData('recipes', 'italian').subscribe((res: any) => {
    //   this.recipeImporter.run(res);
    // });
    this.menu = this.recipeService.getSnapshot();
  }

}
