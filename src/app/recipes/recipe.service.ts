import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeService {
  private menu: AngularFirestoreCollection<Recipe>;
  public menuStatus: string;

  public constructor(private afs: AngularFirestore) {
    const limit = 5;
    this.menu = this.afs.collection('recipes', (ref) => ref.where('status', '==', 'current').limit(limit));
  }

  public getData(): Observable<Recipe[]> {
    return this.menu.valueChanges();
  }

  public getSnapshot(): Observable<Recipe[]> {
    return this.menu.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Recipe;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  public getRecipe(id: string) {
    return this.afs.doc<Recipe>(`recipes/${id}`);
  }

  public create(id: string, recipe: Recipe) {
    return this.menu.doc(id).set(recipe);
  }

  public updateRecipe(id: string, data: Partial<Recipe>) {
    return this.getRecipe(id).update(data);
  }

  public deleteRecipe(id: string) {
    return this.getRecipe(id).delete();
  }
}
