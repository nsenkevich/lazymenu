import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';
import { firestore } from 'firebase';

@Injectable()
export class RecipeService {
  private menu: Observable<Recipe[]>;
  public menuStatus: string;
  public statusFilter$: BehaviorSubject<string | null>;
  public limitFilter$: BehaviorSubject<number | null>;

  public constructor(private afs: AngularFirestore) {
    this.statusFilter$ = new BehaviorSubject(null);
    this.limitFilter$ = new BehaviorSubject(null);
    this.menu = Observable.combineLatest(
      this.statusFilter$,
      this.limitFilter$
    ).switchMap(([status, limit]) =>
      afs.collection<Recipe>('recipes', ref => {
        let query: firestore.Query = ref;
        if (status) { query = query.where('status', '==', status); }
        if (limit) { query = query.limit(limit); }
        return query;
      }).valueChanges()
    );
  }

  public getData(status: string): Observable<Recipe[]> {
    this.statusFilter$.next(status);
    this.limitFilter$.next(3);
    return this.menu;
  }

  public getSnapshot(): Observable<Recipe[]> {
    return this.getData('pending');
  }

  public getRecipe(id: string) {
    return this.afs.doc<Recipe>(`recipes/${id}`);
  }

  public create(id: string, recipe: Recipe) {
    return this.afs.collection<Recipe>('recipes').doc(id).set(recipe);
  }

  public updateRecipe(id: string, data: Partial<Recipe>) {
    return this.getRecipe(id).update(data);
  }

  public deleteRecipe(id: string) {
    return this.getRecipe(id).delete();
  }
}
