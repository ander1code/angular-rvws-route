import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PeopleDetailsAppComponent } from './people-details-app/people-details-app.component';
import { AuthGuard } from './guards/auth.guard';
import { PeopleGuard } from './guards/people.guard';
import { PeopleDetailsResolver } from './guards/people-details.resolver';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PeopleDetailsAppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    PeopleModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuard, PeopleGuard, PeopleDetailsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
