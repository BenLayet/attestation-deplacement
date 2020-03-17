import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Certificate} from '../certificate';
import { GoingOutReason } from '../going-out-reason.enum';

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

}
