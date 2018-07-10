import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '../shared/material.module';
import { NavigationComponent } from '../core/navigation/navigation.component';
import { SideNavComponent } from '../core/side-nav/side-nav.component';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../core/footer/footer.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterMock, AuthServiceMock, fakeActivatedRoute } from '../../mocks';

xdescribe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [AppComponent, NavigationComponent, SideNavComponent, FooterComponent, SvgIconComponent],
      imports: [MaterialModule, RouterModule, BrowserAnimationsModule],
      providers: [
        {provide: AuthService, useClass: AuthServiceMock},
        {provide: Router, useClass: RouterMock},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
