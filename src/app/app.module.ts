import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CertificateFormComponent} from './certificate-form/certificate-form.component';
import {
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatRadioModule,
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {CertificateReviewComponent} from './certificate-review/certificate-review.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CertificateComponent } from './certificate/certificate.component';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
@NgModule({
    declarations: [
        AppComponent,
        CertificateFormComponent,
        CertificateReviewComponent,
        CertificateComponent
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
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'fr'},
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: ['l', 'LL'],
                },
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
