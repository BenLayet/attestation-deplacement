import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CertificateFormComponent} from './certificate-form/certificate-form.component';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule} from '@angular/material';

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
        MatNativeDateModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
