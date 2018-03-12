import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipeId: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.recipeId = params.id);
  }

  ngOnInit() {}

}
