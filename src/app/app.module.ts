import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CertificateFormComponent} from './certificate-form/certificate-form.component';
import {
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
    declarations: [
        AppComponent,
        CertificateFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        FormsModule,
        MatDatepickerModule,
        MatRadioModule,
        MatMomentDateModule,
        MatInputModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                display: {
                    dateInput: 'L',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            },
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
