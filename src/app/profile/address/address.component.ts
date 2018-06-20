import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class DeliveryAddress {
  constructor(
    public fullName: string,
    public city: string,
    public country: string,
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
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnChanges {

  public addressForm: FormGroup;
  @Input() state: string;
  @Input() value: DeliveryAddress;
  @Output() submitted = new EventEmitter<DeliveryAddress>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.createAddressForm();
    this.addressForm.controls.country.disable();
    this.patchForm();
    this.setFormState();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state.firstChange) {
      return;
    }
    this.setFormState();
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

  private patchForm(): void {
    if (this.value) {
      this.addressForm.patchValue(this.value);
    }
  }

  private setFormState(): void {
    if (this.state === 'view') {
      this.addressForm.disable();
    }
    if (this.state === 'edit' || !this.value) {
      this.addressForm.enable();
    }
  }

  public submit(): void {
    if (this.addressForm.valid) {
      this.submitted.emit(this.addressForm.value);
      this.addressForm.disable();
    }
  }

}
