import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> {
        return this.checkAccess();
    }

    // Mesmo codigo do canActivate
    canLoad(
        route: Route
    ): Observable<boolean> | boolean {
        console.log('canload');
        return this.checkAccess();
    }

    private checkAccess() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
