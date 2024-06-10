import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, Orders, OrderTable } from '../entities/order';
import { Observable, Subject, map } from 'rxjs';
import { Table } from '../entities/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class OrderService 
{
  private _order$ = new Subject<Order>();

  public order$!:Observable<Order>;

  constructor(private httpClient: HttpClient) { }


  //==================================================
  //get

  public getAllorder():Observable<Orders>
  {
    const url:string = "http://localhost:8080/pate_d_or/commande";

    return this.httpClient.get<Orders>(url);
  }

  //-------------------------------------------------

  public getOrderById(id:number):Observable<Order>
  {
    const url:string = "http://localhost:8080/pate_d_or/commande/"+String(id);

    return this.httpClient.get<Order>(url);

  }

  //-------------------------------------------------

  public getOrderByTableId(id:number):Observable<Order>
  {
    const url:string = "http://localhost:8080/pate_d_or/commande/table/"+String(id);
    
    return this.httpClient.get<Order>(url);
     
    
  }


  //==================================================
  //post

  public createOrder(table:Table):Observable<Order>
  {
    const body =
    {
      state: "take",
      table: table
    }

    const url:string ="http://localhost:8080/pate_d_or/commande";

    return this.httpClient.post<Order>(url, body);
    
  }


  //==================================================
  //put

  public updateOrderStatus(orderId:number, newState:string):void
  {

    const body =
    {
      state: newState
    }

    const url:string ="http://localhost:8080/pate_d_or/commande/"+Number(orderId);

    this.httpClient.put<Order>(url, body).subscribe();

  }

  //-------------------------------------------------

  public updateOrderDishes(order:Order):void
  {

    const url:string ="http://localhost:8080/pate_d_or/commande/"+Number(order.id);

    this.httpClient.put<Order>(url, order).subscribe();

  }



}
