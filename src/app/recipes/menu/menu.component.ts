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

  menu: Observable<Recipe[]>;
  content: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipes = this.recipeService.getData()
    this.menu = this.recipeService.getSnapshot();
  }

  createRecipe() {
    this.recipeService.create(this.content);
    this.content = '';
  }

}
