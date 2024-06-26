import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant, Restaurants } from '../entities/Restaurant';
import { Observable, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService 
{
  public readonly restaurantKey:string = "restaurant";

  constructor(private httpClient: HttpClient, private storageService: StorageService){}
  
  public getRestaurants():Observable<Restaurants>
  {
    return this.httpClient.get<Restaurants>("http://localhost:8080/admin/resto");
  }

  //-------------------------------------
  //storage

  public saveRestaurant(restaurant:Restaurant):void
  {
    this.storageService.set(this.restaurantKey, JSON.stringify(restaurant));

  }

  public getRestaurant():Restaurant | null
  {
    let result = null;
    const restaurant = this.storageService.get(this.restaurantKey);
    
    if(restaurant) result = JSON.parse(restaurant);

    return result;
  }

  

}
