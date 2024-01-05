import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  person: Person;

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    /*
      this.activatedRoute.params.subscribe((params) => {
      this.person = this.peopleService.getPersonbyID(params['id']);
      if (this.person === null) {
        this.router.navigate(['/notfound']);
      }
    });
    */

    // Utilizando resolver:
    // Diferença grande na programação com AJAX.
    this.activatedRoute.data.subscribe((
      info: { person: Person }) => {
        console.log('Resolver...');
        this.person = info.person;
    });
  }
}


