import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../entities/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-header-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './header-restaurant.component.html',
  styleUrl: './header-restaurant.component.scss',
})
export class HeaderRestaurantComponent implements OnInit {
  public currentRestaurant?: Restaurant | null;

  constructor(private _restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.currentRestaurant = this._restaurantService.getRestaurant();
  }
}
