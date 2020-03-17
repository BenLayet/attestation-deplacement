import {Component, OnInit} from '@angular/core';
import {Certificate} from './certificate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  certificate = new Certificate();
  step = 1;

  ngOnInit(): void {
  }

}
