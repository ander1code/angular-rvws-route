import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PeopleDetailsAppComponent } from './people-details-app/people-details-app.component';
import { AuthGuard } from './guards/auth.guard';
import { PeopleGuard } from './guards/people.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'people',
        loadChildren: './people/people.module#PeopleModule',
        canActivate: [AuthGuard],
        canActivateChild: [PeopleGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'person/:id',
        component: PeopleDetailsAppComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];

@NgModule({
    // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
