import { BehaviorSubject, of, Observable } from 'rxjs';
import { User, UserInterface } from './app/auth/user';
import { MenuComponent } from './app/menu/menu.component';
import { Routes } from '@angular/router';
import {} from 'jasmine';

export const AngularFirestoreMock = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

export const AngularFireAuthMock = {
    authState: of({ uid: 'ABC123' })
  };

  export class AuthServiceMock {
    private user: Observable<any>;
    constructor() {
      this.user = of(User.createGuest);
    }
    getUser() {
      return this.user;
    }
    logout() {
      return new Promise((resolve, _reject) => resolve());
    }
    updateUser(user: UserInterface) {

    }
  }

  export class RouterMock {
    navigate = jasmine.createSpy('navigate');
  }

  export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MenuComponent},
  ];
  export   const fakeActivatedRoute = {
    snapshot: { data: {} }
  };
