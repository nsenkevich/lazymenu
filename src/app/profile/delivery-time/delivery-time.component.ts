import { AuthService } from '../../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-time',
  templateUrl: './delivery-time.component.html',
  styleUrls: ['./delivery-time.component.scss']
})
export class DeliveryTimeComponent implements OnInit {

  public deliverySlot: string;
  @Input() user: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.deliverySlot = '8AM-12NOON';
    if (this.user.deliverySlot && this.user.deliverySlot.length) {
      this.deliverySlot = this.user.deliverySlot;
    }
  }

  public onFilterChange(val: string): void {
    this.deliverySlot = val;
  }

  public select(): void {
    this.user.deliverySlot = this.deliverySlot;
    this.authService.updateUser(this.user);
  }

}
