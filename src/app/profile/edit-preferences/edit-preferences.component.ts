import { Component, OnInit, Input } from '@angular/core';
import { Preferences } from '../../auth/preferences/preferences.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-edit-preferences',
  template: `<mat-progress-bar *ngIf="processingForm" [color]="'primary'" [mode]="'query'" class="absolute bottom">
  </mat-progress-bar>
  <div class="form-wrapper relative" fxFlex="50" fxFlexOffset="25">
  <button class="edit absolute" (click)="toggleFormState()" *ngIf="!formState">
      <i class="material-icons" matTooltip="edit">mode_edit</i>
  </button>
  <app-preferences [state]="formState?'edit':'view'" [value]="preferences"
  (submitted)="submitPreferences($event)"></app-preferences>
</div>`,
  styleUrls: ['./edit-preferences.component.scss']
})
export class EditPreferencesComponent implements OnInit {
  processingForm: boolean;
  @Input() user: any;

  public formState: boolean;
  public preferences: Preferences;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.preferences = this.getPreferences();
  }

  public submitPreferences(preferences: Preferences): void {
    this.processingForm = true;
    this.user.hasAllergies = preferences.hasAllergies || 'no';
    this.user.allergies = preferences.allergies || [];
    this.user.diet = [preferences.diet] || [];
    this.authService.updateUser(this.user);
    setTimeout(() => {
      this.processingForm = false;
      this.toggleFormState();
    }, 1000);
  }

  public toggleFormState(): void {
    this.formState = !this.formState;
  }

  private getPreferences(): Preferences {
    if (this.user) {
      return { hasAllergies: this.user.hasAllergies, allergies: this.user.allergies, diet: this.user.diet[0] };
    }
    return null;
  }

}
