import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../entities/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss'
})
export class RestaurantCardComponent 
{
  @Input()
  public restaurant!:Restaurant;

  constructor(private restaurantService: RestaurantService, private router: Router){}

  
  public enterRestaurant(restaurant:Restaurant):void
  {
    this.restaurantService.saveRestaurant(restaurant);
    this.router.navigateByUrl("tables");
    

  }



}
