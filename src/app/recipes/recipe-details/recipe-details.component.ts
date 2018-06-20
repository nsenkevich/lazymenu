import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import * as jsPDF from 'jspdf';
import { ImageConverterService } from '../../shared/image-converter.service';
import { AuthService, User } from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit {
  public showVideo: boolean;
  public recipeId: string;
  public recipe: any;
  public user: User;

  @ViewChild('page') page: ElementRef;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private imageConverter: ImageConverterService, private authService: AuthService, public router: Router) {
    this.showVideo = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.recipeId = params.id);
    this.recipe = this.recipeService.getRecipe(this.recipeId).valueChanges();
    this.authService.getUser().subscribe((user) => {
      if (user != null) {
        this.user = user;
      }
    });
  }

  public downloadRecipePdf(recipeData: any): void {
    if (!this.user) {
      this.router.navigate(['/auth']);
      return;
    }
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
