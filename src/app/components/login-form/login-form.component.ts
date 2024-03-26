import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../entities/user';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  public user?: User;
  public email!: string;
  public password!: string;

  public authenticationResult?: boolean;

  constructor(private _router: Router, private _loginService: LoginService) {
    if (this._loginService.isAuthenticated()) {
      console.log('Authentication ok redirection...');
    }
  }

  public submit(): void {
    this._loginService.logIn(this.email, this.password).subscribe((user) => {
      if (user) {
        this.authenticationResult = true;
        this.user = user;
        console.log(user);
        console.log('Authentication ok redirection...');
      } else {
        this.authenticationResult = false;
      }
    });
  }
}
