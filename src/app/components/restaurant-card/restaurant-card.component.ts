import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../entities/Restaurant';

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

  constructor()
  {
  }

  
  public enterRestaurant(restaurant:Restaurant)
  {
    //enregistre le retaurant dans le local storage


  }



}
