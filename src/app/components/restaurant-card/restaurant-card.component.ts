import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../entities/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss',
})
export class RestaurantCardComponent implements OnInit {
  @Input()
  public restaurant!: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private _router: Router,
    private navbarService:NavbarService
  ) {}

  public enterRestaurant(restaurant: Restaurant): void {
    this.restaurantService.saveRestaurant(restaurant);
    this._router.navigateByUrl('tables');

    this._router.navigateByUrl(`reservations/restaurant/${restaurant.id}`);
  }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);
  }
}
