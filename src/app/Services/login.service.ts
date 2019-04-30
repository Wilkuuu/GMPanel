import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from 'firebase';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    user = new Subject<any>();

    constructor(private fireAuth: AngularFireAuth,
                private toastr: ToastrService,
                private router: Router) {
        fireAuth.authState.subscribe(user => {
            this.user.next(user);
        });
    }

    login(form: NgForm) {
        this.fireAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
            .then(() => {
                this.router.navigate(['/']);
            })
            .catch((err) => {
                console.log(err);
            });
        form.reset();
    }

    singup(form: NgForm) {
        this.fireAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password).then(value => {
            this.toastr.success('You are registred now!', 'Success');
        }).catch(err => {
            this.toastr.error(err.message, 'Error');

            console.log(err);
        });
    }

    logout() {
        this.fireAuth.auth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    returnUser() {
        return this.user.asObservable();
    }


}
