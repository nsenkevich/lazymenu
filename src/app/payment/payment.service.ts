import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User, AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaymentService {
  private cardsCollection: AngularFirestoreCollection<any>;
  private userId: string = null;

  public constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.cardsCollection = afs.collection('stripe_customers');
  }

  public getCard() {
    return this.firebaseAuth.authState.switchMap(user => {
      if (user) {
        this.userId = user.uid;
        return this.cardsCollection.doc(this.userId).collection('sources').doc(this.userId).valueChanges();
      }
      return Observable.of(null);
    });
  }

  public saveCard(card: any) {
    return this.cardsCollection.doc(this.userId).collection('sources').doc(this.userId).set(card);
  }

  public removeCard() {
    return this.cardsCollection.doc(this.userId).collection('sources').doc(this.userId).delete();
  }

}
