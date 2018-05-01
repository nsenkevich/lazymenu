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

  @Input() recipe: Recipe;

  public constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  public ngOnInit() {
    // this.route.params.subscribe(params => this.recipeId = params.id);
  }

}
