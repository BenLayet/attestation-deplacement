import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../certificate';
import { GoingOutReason } from '../going-out-reason.enum';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {

  @Input()
  certificate: Certificate;
  GoingOutReason = GoingOutReason;
  @Input()
  footerDisplayed = false;

  constructor() {
  }
}
