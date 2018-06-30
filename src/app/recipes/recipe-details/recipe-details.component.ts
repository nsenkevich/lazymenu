import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import * as jsPDF from 'jspdf';
import { ImageConverterService } from '../../shared/image-converter.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit {
  public showVideo: boolean;
  public recipeId: string;
  public recipe: any;

  @ViewChild('page') page: ElementRef;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private imageConverter: ImageConverterService) {
    this.showVideo = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.recipeId = params.id);
    this.recipe = this.recipeService.getRecipe(this.recipeId).valueChanges();
  }

  public downloadRecipePdf(ev: any, recipeData: any): void {

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.page.nativeElement;
    // this.imageConverter.getImageFromUrl(recipeData.thumbnail).subscribe((response) => {
    //   const imgData = response;
    //   doc.addImage(imgData, 'JPEG', 15, 10, 100, 80);
    doc.fromHTML(content, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save(recipeData.name + '.pdf');
    //  });
  }

}
