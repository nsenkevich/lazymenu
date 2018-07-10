import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowComponent } from './how.component';
import { MaterialModule } from '../../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

xdescribe('HowComponent', () => {
  let component: HowComponent;
  let fixture: ComponentFixture<HowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowComponent ],
      imports:[FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
