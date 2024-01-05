import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    showMenuEmitter = new EventEmitter<boolean>();

    private isAuth = false;

    constructor(private router: Router) { }

    onLogin(user: User) {
        ((user.login === 'anderson') && (user.password === '123456')) ?
            this.SuccessLogin() : this.ErrorLogin();
    }

    isAuthenticated() {
        return this.isAuth;
    }

    private SuccessLogin() {
        this.isAuth = true;
        this.showMenuEmitter.emit(true);
        this.router.navigate(['/people']);
    }

    private ErrorLogin() {
        this.isAuth = false;
        alert('Invalid login and password.');
        this.showMenuEmitter.emit(false);
        this.router.navigate(['/']);
    }
}
