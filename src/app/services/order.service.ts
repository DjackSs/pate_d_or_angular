import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, Orders } from '../entities/order';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService 
{

  constructor(private httpClient: HttpClient) { }

  public getAllorder():Observable<Orders>
  {
    return this.httpClient.get<Orders>("http://localhost:8080/pate_d_or/commandes");
  }

  public getOrderById(id:number):Observable<Order>
  {
    return this.httpClient.get<Order>("http://localhost:8080/pate_d_or/commandes/"+id);

  }

  public getOrderByTableId(id:number):Observable<Orders>
  {
    return this.httpClient.get<Orders>("http://localhost:8080/pate_d_or/commandes/table/"+id);
    
   
  }

}
