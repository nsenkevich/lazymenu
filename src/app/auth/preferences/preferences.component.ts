import { UserDiet } from './userDiet';
import { UserAllergies } from './userAllergies';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


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
  @Output() submitted = new EventEmitter<Preferences>();
  public selected: any;
  public userPreferencesForm: FormGroup;
  public allergies: Array<Object>;
  public diet: Array<Object>;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.allergies = UserAllergies;
    this.diet = UserDiet;
    this.selected = (this.diet[0] as any).value;
    this.createUserPreferencesForm();
  }

  private createUserPreferencesForm(): void {
    this.userPreferencesForm = this.fb.group({
      hasAllergies: ['no', []],
      allergies: [[], []],
      diet: [[], []]
    });
    this.userPreferencesForm.controls.allergies.disable();
    const self = this;
    this.userPreferencesForm.controls.hasAllergies.valueChanges.subscribe(value => {
      if (value === 'no') {
        self.userPreferencesForm.controls.allergies.disable();
      } else {
        self.userPreferencesForm.controls.allergies.enable();
      }
    });
    this.userPreferencesForm.controls.diet.patchValue([(this.diet[0] as any).value]);
  }

  public submitPreferences(): void {
    if (this.userPreferencesForm.valid) {
      this.submitted.emit(this.userPreferencesForm.value);
    }
  }

}
