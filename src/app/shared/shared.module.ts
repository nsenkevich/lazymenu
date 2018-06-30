// Why? SharedModule exists to make commonly used components, directives and pipes available for use in the templates
// of components in many other modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { SafeYouTubeUrlPipe } from './safe-url.pipe';
import { HttpModule } from '@angular/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ImageConverterService } from './image-converter.service';
import { DownloadButtonComponent } from './download-button/download-button.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule,
    HttpModule
  ],
  declarations: [
    SafeYouTubeUrlPipe,
    DownloadButtonComponent
  ],
  providers: [ImageConverterService],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule,
    SafeYouTubeUrlPipe,
    HttpModule,
    DownloadButtonComponent
  ]
})
export class SharedModule { }
