import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../entities/Restaurant';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss',
})
export class RestaurantCardComponent {
  @Input()
  public restaurant!: Restaurant;

  constructor(private _router: Router) {}

  public enterRestaurant(restaurant: Restaurant) {
    //enregistre le retaurant dans le local storage
    console.log(this.restaurant);

    this._router.navigateByUrl(`reservations/restaurant/${restaurant.id}`);
  }
}
