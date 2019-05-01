import {Injectable} from '@angular/core';
import {User} from 'firebase';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    user: User;

    constructor(private  loginService: LoginService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.loginService.userFB) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
