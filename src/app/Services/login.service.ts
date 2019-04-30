import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fireAuth: AngularFireAuth,
              private toastr: ToastrService,
              private router: Router) { }

  login(form: NgForm) {
    this.fireAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
        .then(() => {console.log('log in');})
        .catch((err) => {
      console.log(err);
    });
    form.reset();
  }

  singup(form: NgForm) {
    this.fireAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password).then( value => {
      this.toastr.success('You are registred now!', 'Success' );
    }).catch( err => {
      this.toastr.error(err.message, 'Error' );

      console.log(err);
    });
  }

  logout() {
    this.fireAuth.auth.signOut().then(() => {console.log('logout');
    this.router.navigate(['/']);});
  }


}
