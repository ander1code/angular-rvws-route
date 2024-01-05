import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-details-app',
  templateUrl: './people-details-app.component.html',
  styleUrls: ['./people-details-app.component.css']
})
export class PeopleDetailsAppComponent implements OnInit, OnDestroy {

  id: string;

  subs: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params['id'];
    this.subs = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
