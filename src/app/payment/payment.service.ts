import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User, AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaymentService {

  private firebaseAuth: AngularFireAuth;
  private cardsCollection: AngularFirestoreCollection<any>;
  private userId: string = null;

  public constructor(firebaseAuth: AngularFireAuth, afs: AngularFirestore) {
    this.firebaseAuth = firebaseAuth;
    this.cardsCollection = afs.collection('stripe_customers');
  }

  public getCard() {
    return this.firebaseAuth.authState.switchMap(user => {
      this.userId = user.uid;
      return this.cardsCollection.doc(this.userId).collection('sources').doc(this.userId).valueChanges();
    });
  }

  public saveCard(card: any) {
    return this.cardsCollection.doc(this.userId).collection('sources').doc(this.userId).set(card);
  }

  public removeCard() {
    return this.cardsCollection.doc(this.userId).collection('sources').doc(this.userId).delete();
  }

}
