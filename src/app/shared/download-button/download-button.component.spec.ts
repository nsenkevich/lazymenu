import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadButtonComponent } from './download-button.component';
import { AuthService } from '../../auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceMock, RouterMock } from '../../../mocks';
import { Router } from '@angular/router';

xdescribe('DownloadButtonComponent', () => {
  let component: DownloadButtonComponent;
  let fixture: ComponentFixture<DownloadButtonComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadButtonComponent ],
      providers:[
        {provide: AuthService, useClass: AuthServiceMock},
        {provide: Router, useClass: RouterMock}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadButtonComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
