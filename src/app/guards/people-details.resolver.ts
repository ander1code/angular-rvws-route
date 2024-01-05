import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../people/person';
import { PeopleService } from '../people/people.service';

@Injectable()
export class PeopleDetailsResolver implements Resolve<Person> {

    constructor(private peopleService: PeopleService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Person> | Person {
        return this.peopleService.getPersonbyID(route.params['id']);
    }
}
