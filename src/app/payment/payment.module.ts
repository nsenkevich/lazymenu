import { NgModule } from '@angular/core';

import { PaymentService } from './payment.service';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    SharedModule,
    AuthModule
  ],
  declarations: [MakePaymentComponent, CardComponent],
  exports: [MakePaymentComponent, CardComponent],
  providers: [PaymentService, AuthService]
})
export class PaymentModule { }
