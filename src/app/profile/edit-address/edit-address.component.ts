
import { Component, OnInit, Input } from '@angular/core';
import { DeliveryAddress } from '../address/address.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-edit-address',
  template: `<mat-progress-bar *ngIf="processingForm" [color]="'accent'" [mode]="'query'" class="absolute bottom">
  </mat-progress-bar>
  <div class="form-wrapper relative" fxFlex="50" fxFlexOffset="25">
  <button class="edit absolute" (click)="toggleFormState()" *ngIf="!formState && deliveryAddress">
      <i class="material-icons" matTooltip="edit">mode_edit</i>
  </button>
  <app-address [state]="formState?'edit':'view'" [value]="deliveryAddress"
  (submitted)="submitAddress($event)"></app-address>
</div>`,
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  @Input() user: any;
  public processingForm: boolean;
  public formState: boolean;
  public address: any;
  public deliveryAddress: DeliveryAddress;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.deliveryAddress = this.getDeliveryAddress(this.user);
    console.log(this.user)
  }

  private getDeliveryAddress(user: any): DeliveryAddress {
    if (user.deliveryAddress) {
      return user.deliveryAddress;
    }
    return null;
  }

  public toggleFormState(): void {
    this.formState = !this.formState;
  }

  public submitAddress(address: DeliveryAddress): void {
    this.processingForm = true;
    this.user.deliveryAddress = address;
    this.authService.updateUser(this.user);
    setTimeout(() => {
      this.processingForm = false;
      this.deliveryAddress = this.getDeliveryAddress(this.user);
      this.toggleFormState();
    }, 1000);
  }

}
