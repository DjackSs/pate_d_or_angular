import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuRoute } from './menu-routes';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ featherAirplay, heroUsers })]
})
export class NavbarComponent {
  public menuRoutes: IMenuRoute[] = [
    { path: 'restaurants', libelle: 'Accueil' },
    { path: 'resa', libelle: 'Réservation' },
    { path: 'table', libelle: 'Table' },
    { path: 'commandes', libelle: 'Commandes' },
    { path: 'bills', libelle: 'Facturation' },
  ];

  constructor() {

  }

  // public logout(): void {
  //   this.logoutService.logout();
  // }
}
