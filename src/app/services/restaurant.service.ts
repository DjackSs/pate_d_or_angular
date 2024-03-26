import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant, Restaurants } from '../entities/Restaurant';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService 
{
  constructor(private httpClient: HttpClient)
  {
   
  }
  
  public restaurants?:Restaurant[];

  public restaurant?:Restaurant;

  

  public getRestaurants():Observable<Restaurants>
  {
    return this.httpClient.get<Restaurants>("http://localhost:8080/admin/resto");
  }
}
