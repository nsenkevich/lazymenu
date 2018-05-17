import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Http } from '@angular/http';

@Injectable()
export class RecipeImporter {

    public constructor(private http: Http, private recipeService: RecipeService) {
        this.recipeService = recipeService;
    }

    public getData(folder: string, file: string): any {
        // const recipes: Recipe[] = 
        // return recipes;

        const jsonLocation = '../assets/data/' + folder + '/' + file + '.json?' + Date.now();
        return this.http.get(jsonLocation)
            .map(data => data.json());
    }

    public run(recipes: Recipe[]) {
        for (const recipe of recipes) {
            this.recipeService.create(recipe);
        }
    }
}
