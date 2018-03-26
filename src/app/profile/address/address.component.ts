import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class UserCountry {
  constructor(
    public name: string,
    public code: string
  ) { }
}

export class DeliveryAddress {
  constructor(
    public fullName: string,
    public city: string,
    public country: UserCountry,
    public postCode: string,
    public streetAddress1: string,
    public streetAddress2?: string,
    public county?: string,
    public phone?: number
  ) { }
}
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AddressComponent implements OnInit {

  addressForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.createAddressForm();
  }

  private createAddressForm(): FormGroup {
    return this.fb.group({
      fullName: ['', [Validators.required]],
      phone: ['', []],
      streetAddress1: ['', [Validators.required]],
      streetAddress2: ['', []],
      city: ['', [Validators.required]],
      county: ['', []],
      country: ['United Kingdom', []],
      postCode: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public submit(): void {
    if (this.addressForm.valid) {
      console.log(this.addressForm)
    }
  }

}
