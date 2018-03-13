import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatSnackBarModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatRadioModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatSnackBarModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatRadioModule
    ]
})
export class MaterialModule { }
