import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, Orders, OrderTable } from '../entities/order';
import { Observable, map } from 'rxjs';
import { Table } from '../entities/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class OrderService 
{

  constructor(private httpClient: HttpClient) { }

  //------------------------------------------
  //get

  public getAllorder():Observable<Orders>
  {
    const url:string = "http://localhost:8080/pate_d_or/commandes";

    return this.httpClient.get<Orders>(url);
  }

  public getOrderById(id:number):Observable<Order>
  {
    const url:string = "http://localhost:8080/pate_d_or/commandes/"+String(id);

    return this.httpClient.get<Order>(url);

  }

  public getOrderByTableId(id:number):Observable<Order>
  {
    const url:string = "http://localhost:8080/pate_d_or/commandes/table/"+String(id);
    
    return this.httpClient.get<Orders>(url).pipe(map((result) =>
      {
         return result[0];
      }));
    
  }

  //------------------------------------------
  //post

  public createOrder(table:Table):Observable<Order>
  {
    const body =
    {
      state: "take",
      table: table
    }

    const url:string ="http://localhost:8080/pate_d_or/commandes";

    return this.httpClient.post<Order>(url, body);
    
  }

  //------------------------------------------
  //put

  public updateOrderStatus(orderId:number, newState:string):void
  {

    const body =
    {
      state: newState
    }

    const url:string ="http://localhost:8080/pate_d_or/commandes/"+Number(orderId)+"/modifier-etat";

    this.httpClient.put<Order>(url, body).subscribe();

  }



}
