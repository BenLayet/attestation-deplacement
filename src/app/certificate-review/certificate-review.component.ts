import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Certificate} from '../certificate';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
    selector: 'app-certificate-review',
    templateUrl: './certificate-review.component.html',
    styleUrls: ['./certificate-review.component.scss']
})
export class CertificateReviewComponent {

    @Input()
    certificate: Certificate;
    @Output()
    modifyRequested = new EventEmitter();
    @Output()
    validated = new EventEmitter();

    @ViewChild(SignaturePad, {static: true}) signaturePad: SignaturePad;

    signComplete() {
        this.certificate.signatureDataUrl = this.signaturePad.toDataURL();
    }
}
