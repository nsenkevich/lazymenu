import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeService {

  private menu: AngularFirestoreCollection<Recipe>;
  private recipeDocument:   AngularFirestoreDocument<Recipe>;
  private afs: AngularFirestore;

  public constructor(afs: AngularFirestore) {
    this.afs = afs;
    this.menu = this.afs.collection('recipes', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  public getData(): Observable<Recipe[]> {
    return this.menu.valueChanges();
  }

  public getSnapshot(): Observable<Recipe[]> {
    // ['added', 'modified', 'removed']
    return this.menu.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Recipe;
        return { id: a.payload.doc.id, content: data.content, hearts: data.hearts, time: data.time };
      });
    });
  }

  public getRecipe(id: string) {
    return this.afs.doc<Recipe>(`recipes/${id}`);
  }

  public create(content: string) {
    const recipe = {
      content,
      hearts: 0,
      time: new Date().getTime(),
    };
    return this.menu.add(recipe);
  }

  public updateRecipe(id: string, data: Partial<Recipe>) {
    return this.getRecipe(id).update(data);
  }

  public deleteRecipe(id: string) {
    return this.getRecipe(id).delete();
  }
}
