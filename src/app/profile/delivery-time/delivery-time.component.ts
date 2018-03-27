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
    this.deliverySlot = '8am-12noon';
    if (this.user.deliverySlot && this.user.deliverySlot.length) {
      this.deliverySlot = this.user.deliverySlot;
    }
  }

  public onFilterChange(val: string) {
    this.deliverySlot = val;
    this.user.deliverySlot = val;
    this.authService.updateUser(this.user);
  }

}
