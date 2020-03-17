import { Component, OnInit } from '@angular/core';
import {Certificate} from '../certificate';
import { GoingOutReason } from '../going-out-reason.enum';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.scss']
})
export class CertificateFormComponent implements OnInit {

  certificate = new Certificate();
  GoingOutReason = GoingOutReason;

  constructor() { }

  ngOnInit() {
  }

}
