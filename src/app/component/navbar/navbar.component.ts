import { Component } from '@angular/core';
import { IMenuRoute } from './menu-routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public menuRoutes: IMenuRoute[] = [
    { path: 'restaurant-list', libelle: 'Accueil' },
  ]

  // constructor(private logoutService: AuthService) {

  // }

  // public logout(): void {
  //   this.logoutService.logout();
  // }

}
