import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  changeForm: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user.login = 'anderson';
    this.user.password = '123456';
  }

  onLogin() {
    this.authService.onLogin(this.user);
  }

  onInput() {
    console.log('Deactivate login.');
    this.changeForm = true;
  }
}
