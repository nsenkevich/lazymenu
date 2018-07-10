import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressComponent } from './edit-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressComponent } from '../address/address.component';
import { AuthService } from '../../auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceMock } from '../../../mocks';

xdescribe('EditAddressComponent', () => {
  let component: EditAddressComponent;
  let authService: AuthService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddressComponent, AddressComponent],
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [{provide: AuthService, useClass: AuthServiceMock}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.createComponent(EditAddressComponent).componentInstance;
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
