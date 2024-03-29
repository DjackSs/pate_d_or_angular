import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IMenuRoute } from './menu-routes';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { StorageService } from '../../services/storage.service';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIconComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ featherAirplay, heroUsers })]
})
export class NavbarComponent {
  public menuRoutes: IMenuRoute[] = [
    { path: 'restaurants', libelle: 'Accueil' },
    { path: 'resa', libelle: 'Réservation' },
    { path: 'tables', libelle: 'Table' },
    { path: 'commandes', libelle: 'Commandes' },
    { path: 'bills', libelle: 'Facturation' },
  ];

  public idRestaurant?: number;

  constructor(private storageService: StorageService, private restaurantService: RestaurantService,
    private router: Router,) {
    this.idRestaurant = this.restaurantService.getRestaurant()?.id;
  }

  public getCurrentRestaurant(): void {
    this.router.navigateByUrl(`reservations/restaurant/${this.idRestaurant}`);
  }
}
