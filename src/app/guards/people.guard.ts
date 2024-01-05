import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

// ATTENTION:
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class PeopleGuard implements CanActivateChild {

    constructor() { }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (state.url.includes('new')) {
            alert('Can\'t add.');
            return false;
        }
        return true;
    }
}
