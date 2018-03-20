import { UserDiet } from './userDiet';
import { UserAllergies } from './userAllergies';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


export interface Preferences {
  hasAllergies: string;
  allergies: Array<string>;
  diet: Array<string>;
}

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  allergiesFieldRequired: boolean;
  @Output() submitted = new EventEmitter<Preferences>();
  public userPreferencesForm: FormGroup;
  public allergies: Array<Object>;
  public diet: Array<Object>;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.allergies = UserAllergies;
    this.diet = UserDiet;
    this.createUserPreferencesForm();
    const self = this;
    this.userPreferencesForm.controls.hasAllergies.valueChanges.subscribe((changes: any) => {
      if (changes === 'yes') {
        this.userPreferencesForm.controls.allergies.setValidators(self.arrayLength);
        this.userPreferencesForm.controls.allergies.enable();
        this.userPreferencesForm.controls.allergies.markAsTouched();
      } else {
        this.userPreferencesForm.controls.allergies.disable();
        this.userPreferencesForm.controls.allergies.setValidators(null);
      }
    });
  }

  private arrayLength = (control): Observable<{ [key: string]: string }> => {
    if (!control || !control.value) {
      return null;
    }
    if (!control.value.length) {
      return Observable.create({ Required: 'Field required' });
    }
  }

  private createUserPreferencesForm(): void {
    this.allergiesFieldRequired = false;
    this.userPreferencesForm = this.fb.group({
      hasAllergies: ['no', [Validators.required]],
      allergies: [[], [this.arrayLength]],
      diet: ['balanced', [Validators.required]]
    });
    this.userPreferencesForm.controls.allergies.disable();
  }

  public submitPreferences(): void {
    if (this.userPreferencesForm.valid) {
      this.submitted.emit(this.userPreferencesForm.value);
      this.userPreferencesForm.disable();
    }
  }

}
