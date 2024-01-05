import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[];

  page = 1;

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.router.navigate(['/people'],
        {
          queryParams: { 'page': 1 }
        });
  }

  ngOnInit() {
    this.getPeople();

    this.activatedRoute.queryParams.subscribe((response) => {
      this.page = response['page'];
    });
  }

  getPeople() {
    this.people = this.peopleService.getPeople();
  }

  nextPage() {
    this.page++;
    this.router.navigate(['/people'],
      {
        queryParams: { 'page': this.page }
      });
  }

  previousPage() {
    this.page--;
    this.router.navigate(['/people'],
      {
        queryParams: { 'page': this.page }
      });
  }
}
