import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { Restaurants } from '../../entities/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs';

import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RestaurantCardComponent, CommonModule, LogoutComponent],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit
{
  public restaurants$!:Observable<Restaurants>;

  constructor(private restaurantService: RestaurantService){}

  ngOnInit()
  {
    this.restaurants$ = this.restaurantService.getRestaurants();
  }

}
