import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [
    { id: 1, name: 'Anderson' },
    { id: 2, name: 'Antonia' },
    { id: 3, name: 'Fernanda' },
    { id: 4, name: 'Pamela' },
    { id: 5, name: 'Rafaela' },
    { id: 6, name: 'Jessica' },
    { id: 7, name: 'Paula' },
  ];

  constructor() { }

  getPeople() {
    return this.people;
  }

  getPersonbyID(id: number) {
    const p = this.getPeople();
    for (let i = 0; i < p.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (p[i].id == id) {
        return p[i];
      }
    }
    return null;
  }

  addPerson(person: Person) {
    this.people.push(person);
  }

  editPerson(person: Person) {
    const p = this.getPeople();
    for (let i = 0; i < p.length; i++) {
      if (p[i].id === person.id) {
        p[i].name = person.name;
        return true;
      }
    }
    return false;
  }
}
