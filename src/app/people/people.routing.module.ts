
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { PeopleFormsComponent } from './people-forms/people-forms.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleNotfoundComponent } from './people-notfound/people-notfound.component';
import { AuthGuard } from '../guards/auth.guard';
import { PeopleGuard } from '../guards/people.guard';
import { PeopleDeactivateGuard } from '../guards/people-deactivate.guard';
import { PeopleDetailsResolver } from '../guards/people-details.resolver';

const peopleRoutes: Routes = [
    {
        path: 'people',
        component: PeopleComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'person',
        children: [
            {
                path: 'new',
                component: PeopleFormsComponent,
                canDeactivate: [PeopleDeactivateGuard]
            },
            {
                path: ':id/details',
                component: PeopleDetailsComponent,
                resolve: {
                    person: PeopleDetailsResolver
                }
            },
            {
                path: ':id/edit',
                component: PeopleFormsComponent,
                canDeactivate: [PeopleDeactivateGuard]
            }
        ],
        canActivate: [AuthGuard],
        canActivateChild: [PeopleGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'notfound',
        component: PeopleNotfoundComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(peopleRoutes)],
    exports: [RouterModule]
})
export class PeopleRoutingModule {
}


