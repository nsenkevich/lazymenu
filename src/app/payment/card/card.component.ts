import { Component, AfterViewInit, Input, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

export const CardConfigs: Object = {
  'style': {
    'base': {
      color: 'rgba(0,0,0,.87)',
      fontWeight: 400,
      fontSize: '16px',
      fontFamily: 'Roboto,"Helvetica Neue", sans-serif',
      '::placeholder': {
        color: 'rgba(0,0,0,.38)',
      },
      ':-webkit-autofill': {
        color: 'rgba(0,0,0,.87)',
      },
    }
  },
  'class': {
    focus: 'focused',
    empty: 'empty',
    invalid: 'invalid'
  },
  'hidePostalCode': true
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit, OnDestroy {
  @Input() stripeCardOptions: any;
  @ViewChild('cardInfo') cardInfo: ElementRef;

  public card: any;
  public cardForm: any;
  public cardHandler: string;
  public error: string;

  public constructor(private cd: ChangeDetectorRef, private paymentService: PaymentService) {
    this.cardHandler = this.onChange.bind(this);
  }

  ngAfterViewInit() {
    if (!this.stripeCardOptions) {
      this.stripeCardOptions = CardConfigs;
    }
    this.cardForm = elements.create('card', this.stripeCardOptions);
    this.cardForm.mount(this.cardInfo.nativeElement);
    this.cardForm.addEventListener('change', this.cardHandler);
    this.card = this.paymentService.getCard();
  }

  onChange({ error }): void {
    this.error = null;
    if (error) {
      this.error = error.message;
    }
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.cardForm.removeEventListener('change', this.cardHandler);
    this.cardForm.destroy();
  }

  public getStripeToken(): Observable<string> {
    return Observable.from(stripe.createToken(this.cardForm).then((token) => {
      this.paymentService.saveCard(token);
    }));
  }

  public removeCard(): void {
    this.paymentService.removeCard();
  }

}
