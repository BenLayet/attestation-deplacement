import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Certificate} from '../certificate';
import {GoingOutReason} from '../going-out-reason.enum';
import * as moment from 'moment';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.scss']
})
export class CertificateFormComponent {

  @Input()
  certificate: Certificate;
  @Output()
  submitted = new EventEmitter();
  GoingOutReason = GoingOutReason;
  now = moment();
  birthDateStartDate = moment(new Date(0));

}
