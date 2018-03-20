import { Component, OnInit, HostListener } from '@angular/core';
import { PaymentService } from '../payment.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  private handler: any;
  private paymentSvc: PaymentService;
  public card: any;

  constructor(paymentSvc: PaymentService ) {
    this.paymentSvc = paymentSvc;
  }

  ngOnInit() {
    this.card = this.paymentSvc.getCard();
    console.log(this.card);
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: '/your/awesome/logo.jpg',
      locale: 'auto',
      token: token => { this.paymentSvc.saveCard(token); }
    });
  }

  saveCard() {
    this.handler.open({
      name: 'FireStarter',
      excerpt: 'Deposit Funds to Account',
      amount: 0
    });
  }

  removeCard() {
    this.paymentSvc.removeCard();
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close();
    }

}
