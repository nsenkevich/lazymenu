import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { SvgIconComponent, SvgIconRegistryService } from 'angular-svg-icon';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterMock, fakeActivatedRoute } from '../../../mocks';

xdescribe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgIconComponent, NavigationComponent ],
      imports: [MaterialModule, RouterModule, HttpClientModule],
      providers: [SvgIconRegistryService, LocationStrategy,
        {provide: Router, useValue: new RouterMock()},
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
