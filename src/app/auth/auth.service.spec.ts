import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from 'angularfire2';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthMock, AngularFirestoreMock } from '../../mocks';

class MockAngularFireAuth extends ReplaySubject<FirebaseAuth> {
  logout = (): Promise<void> => {
    return Promise.resolve();
  }
}


describe('AuthService', () => {
  const afAuthMock = new MockAngularFireAuth();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,
        { 'provide': AngularFireAuth, 'useValue': AngularFireAuthMock },
        { 'provide': AngularFirestore, 'useValue': AngularFirestoreMock },
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
