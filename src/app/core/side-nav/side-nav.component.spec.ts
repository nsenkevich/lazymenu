import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

xdescribe('SideNavComponent', () => {
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  }

  const mockRouter = new MockRouter();
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgIconComponent, SideNavComponent ],
      imports:[ MaterialModule, RouterModule ],
      providers: [
        {provide: Router, useValue: mockRouter},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
