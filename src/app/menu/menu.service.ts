import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Menu } from './menu.model';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operator/take';


@Injectable()
export class MenuService {

  private menu: AngularFirestoreCollection<Menu>;

  constructor(private afs: AngularFirestore) {
    this.menu = this.afs.collection('menu', (ref) => ref.where('status', '==', 'current'));
  }

  public getSnapshot(): Observable<Menu> {
return;
    // return this.menu.snapshotChanges().take(1).map((actions) => {
    //   return actions.map((a) => {
    //     const data =  as Menu;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
  }


}
