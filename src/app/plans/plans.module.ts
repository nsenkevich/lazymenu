import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { HowComponent } from './how/how.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PlansComponent,
    HowComponent
  ],
  exports: [],
  providers: []
})
export class PlansModule { }
