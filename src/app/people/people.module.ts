import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from './people.component';
import { PeopleFormsComponent } from './people-forms/people-forms.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleService } from './people.service';
import { PeopleRoutingModule } from './people.routing.module';
import { PeopleNotfoundComponent } from './people-notfound/people-notfound.component';
import { PeopleDeactivateGuard } from '../guards/people-deactivate.guard';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule
  ],
  exports: [PeopleComponent],
  declarations: [PeopleComponent, PeopleFormsComponent, PeopleDetailsComponent, PeopleNotfoundComponent],
  providers: [PeopleService, PeopleDeactivateGuard, AuthGuard]
})
export class PeopleModule { }
