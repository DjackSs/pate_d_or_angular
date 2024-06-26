import { Component, Host, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../entities/user';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @HostBinding('class')
  class=''

  public user?: User;
  public email!: string;
  public password!: string;

  public authenticationResult?: boolean;

  constructor(private _router: Router, private _loginService: LoginService, private navbarService: NavbarService) {
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

        this._router.navigateByUrl("restaurants");
        
      } else {
        this.authenticationResult = false;
      }
    });
  }


  ngOnInit(): void {
    // Hide navbar on login page
    this.navbarService.setShowNavbar(false);
  }
}
