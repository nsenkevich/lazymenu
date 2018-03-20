import { Component, AfterViewInit, Input, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

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
  private cd: ChangeDetectorRef;
  private paymentService: PaymentService;

  public constructor(cd: ChangeDetectorRef, paymentService: PaymentService) {
    this.cd = cd;
    this.paymentService = paymentService;
    this.cardHandler = this.onChange.bind(this);
  }

  public ngAfterViewInit() {
    this.cardForm = elements.create('card', this.stripeCardOptions);
    this.cardForm.mount(this.cardInfo.nativeElement);
    this.cardForm.addEventListener('change', this.cardHandler);

    this.card = this.paymentService.getCard();
  }

  public onChange({ error }) {
    this.error = null;
    if (error) {
      this.error = error.message;
    }
    this.cd.detectChanges();
  }

  public getStripeToken(): Observable<string> {
    return Observable.from(stripe.createToken(this.cardForm)
    .then((token) => {
      this.paymentService.saveCard(token);
    }));
  }

  public ngOnDestroy() {
    this.cardForm.removeEventListener('change', this.cardHandler);
    this.cardForm.destroy();
  }

  public removeCard() {
    this.paymentService.removeCard();
  }

}
