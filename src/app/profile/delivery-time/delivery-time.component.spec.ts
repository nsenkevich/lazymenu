import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTimeComponent } from './delivery-time.component';
import { MaterialModule } from '../../shared/material.module';
import { AuthService } from '../../auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceMock } from '../../../mocks';

xdescribe('DeliveryTimeComponent', () => {
  let component: DeliveryTimeComponent;
  let fixture: ComponentFixture<DeliveryTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryTimeComponent ],
      imports: [ MaterialModule],
      providers: [{provide: AuthService, useClass: AuthServiceMock}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
