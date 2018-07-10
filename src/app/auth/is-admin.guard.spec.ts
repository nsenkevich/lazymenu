import { TestBed, async, inject } from '@angular/core/testing';

import { IsAdminGuard } from './is-admin.guard';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceMock, RouterMock } from '../../mocks';
import { Router } from '@angular/router';

describe('IsAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFireAuth, AuthService, IsAdminGuard,
        {provide: AuthService, useClass: AuthServiceMock},
        {provide: Router, useClass: RouterMock}
      ]
    });
  });

  it('should ...', inject([IsAdminGuard], (guard: IsAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
