import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleNotfoundComponent } from './people-notfound.component';

describe('PeopleNotfoundComponent', () => {
  let component: PeopleNotfoundComponent;
  let fixture: ComponentFixture<PeopleNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
