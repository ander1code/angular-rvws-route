import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailsAppComponent } from './people-details-app.component';

describe('PeopleDetailsAppComponent', () => {
  let component: PeopleDetailsAppComponent;
  let fixture: ComponentFixture<PeopleDetailsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDetailsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
