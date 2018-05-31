import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit {
  public showVideo: boolean;
  public recipeId: string;
  public recipe: any;
  private route: ActivatedRoute;
  private recipeService: RecipeService;

  @ViewChild('page') page: ElementRef;

  constructor(route: ActivatedRoute, recipeService: RecipeService) {
    this.recipeService = recipeService;
    this.route = route;
    this.showVideo = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.recipeId = params.id);
    this.recipe = this.recipeService.getRecipe(this.recipeId).valueChanges();
  }

  public processPdfData(recipeData: any): void {
    console.log(recipeData)

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.page.nativeElement;
    doc.fromHTML(content, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save(recipeData.name + '.pdf');
  }

}
