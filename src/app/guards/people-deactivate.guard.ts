import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PeopleFormsComponent } from '../people/people-forms/people-forms.component';
import { Observable } from 'rxjs';

@Injectable()
export class PeopleDeactivateGuard implements CanDeactivate<PeopleFormsComponent> {
    canDeactivate(
        component: PeopleFormsComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        // Accessing component's attribute:
        if (component.changeForms) {
            return confirm('Do you want exit and lose the datas on form?');
        }
        return true;
    }
}
