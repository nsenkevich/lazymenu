import { NgModule } from '@angular/core';

import { PaymentService } from './payment.service';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    SharedModule,
    AuthModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [PaymentService, AuthService]
})
export class PaymentModule { }
