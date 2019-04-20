import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

window['jQuery'] = jQuery;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  displayMenu() {
    this.display = !this.display
  }

}
