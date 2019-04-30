import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import {LoginService} from '../Services/login.service';

window['jQuery'] = jQuery;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  displayMenu() {
    this.display = !this.display
  }

  logout() {
    this.loginService.logout()
  }

}
