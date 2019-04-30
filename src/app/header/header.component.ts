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
  user;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.returnUser().subscribe(res => {
      this.user = res;
        }
    )
  }

  displayMenu() {
    this.display = !this.display
  }

  logout() {
    this.loginService.logout()
  }

  showUser(){
    console.log(this.user)
  }

}
