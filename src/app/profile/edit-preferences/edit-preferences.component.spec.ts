import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreferencesComponent } from './edit-preferences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreferencesComponent } from '../../auth/preferences/preferences.component';
import { AuthService } from '../../auth/auth.service';
import { AuthServiceMock } from '../../../mocks';

xdescribe('EditPreferencesComponent', () => {
  let component: EditPreferencesComponent;
  let fixture: ComponentFixture<EditPreferencesComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesComponent, EditPreferencesComponent ],
      imports:[FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      providers:[{provide: AuthService, useClass: AuthServiceMock}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.createComponent(EditPreferencesComponent).componentInstance;
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
