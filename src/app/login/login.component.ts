import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../Services/login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loginService.login(form);
  }

  register(form: NgForm){
    this.loginService.singup(form);
  }
}
