import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import * as jsPDF from 'jspdf';
import { Http } from '@angular/http';

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

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private http: Http) {
    this.showVideo = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.recipeId = params.id);
    this.recipe = this.recipeService.getRecipe(this.recipeId).valueChanges();

    this.http.get('assets/257eafd817fc6113ba0b9e468367b94d.jpg')
      .subscribe((response) => {
        const blob = new Blob([response.text()], { type: 'image/jpg' });
        console.log(blob);
        console.log(window.btoa(blob.toString()));
        //   const file = new Blob([ response ], {
        //     type : 'image/jpeg'
        // });
        // const fileURL = URL.createObjectURL(file);

        // if(options && options.successCallBack) {
        //     return options.successCallBack(fileURL, {});
        // }
      });
  }

  public processPdfData(recipeData: any): void {
    console.log(recipeData);

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.page.nativeElement;
    const imgData = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

    doc.addImage(imgData, 'JPEG', 15, 10, 100, 80);
    doc.fromHTML(content, 15, 100, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save(recipeData.name + '.pdf');
  }

}
