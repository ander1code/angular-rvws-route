import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-forms',
  templateUrl: './people-forms.component.html',
  styleUrls: ['./people-forms.component.css']
})
export class PeopleFormsComponent implements OnInit {

  person: Person = new Person();
  changeForms = false;

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.person = this.peopleService.getPersonbyID(params['id']);
      if (this.person === null) {
        this.router.navigate(['/notfound']);
      }
    });
  }

  ngOnInit() {
    this.changeForms = false;
  }

  onSubmit() {

  }

  onInput() {
    console.log('modificando campo people...');
    this.changeForms = true;
  }

  CanDeactivateForm() {
    console.log('Deactivate people.');
    return this.changeForms;
  }
}
