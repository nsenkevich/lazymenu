import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Http } from '@angular/http';

@Injectable()
export class RecipeImporter {

    public constructor(public http: Http, private recipeService: RecipeService) { }

    public getData(file: string): any {
        const jsonLocation = '../assets/data/recipes/' + file + '.json?' + Date.now();
        return this.http.get(jsonLocation)
            .map(data => data.json());
    }

    public run(recipes: Recipe[]) {
        for (const recipe of recipes) {
            this.recipeService.create(recipe.id, recipe);
        }
    }
}
