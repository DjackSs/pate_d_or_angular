import { Injectable } from '@angular/core';
import { Table } from '../entities/Restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService 
{

  constructor(private httpClient: HttpClient){}

  public getTablesByIdRestaurant(restaurantId:number):Observable<Table[]>
  {
    return this.httpClient.get<Table[]>("http://localhost:8080/pate_d_or/table/resto/"+restaurantId); 
  }


}
