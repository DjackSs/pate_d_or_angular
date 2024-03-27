import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent 
{

  constructor(private loginService: LoginService, private router: Router){}


  public logout()
  {

    this.loginService.logout();
    this.router.navigateByUrl('');


  }

}
