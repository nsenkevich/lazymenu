import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { PlansComponent } from './plans.component';
import { HowComponent } from './how/how.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule, 
    ReactiveFormsModule
  ],
  declarations: [
    PlansComponent,
    HowComponent
  ],
  exports: [],
  providers: []
})
export class PlansModule { }
