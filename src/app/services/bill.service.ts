import { Injectable } from '@angular/core';
import { Bill, Bills } from '../entities/Bill';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  public readonly billKey: string = 'bill';

  public bills?: Bills[];
  public bill?: Bill;

  constructor(
    private httpClient: HttpClient,
    private serviceStorage: StorageService
  ) {}

  public getBillsByIdRestaurant(restaurantId:number):Observable<Bill[]>
  {
    return this.httpClient.get<Bill[]>("http://localhost:8080/pate_d_or/commande/resto/"+restaurantId); 
  }

  public getBillsById(Id:number):Observable<Bill>
  {
    return this.httpClient.get<Bill>("http://localhost:8080/pate_d_or/commande/"+Id); 
  }

  public getBillsSoldout(): Observable<Bills> {
    return this.httpClient.get<Bills>(
      'http://localhost:8080/pate_d_or/commande/soldout'
    );
  }



  public saveBill(bill: Bill): void {
    this.serviceStorage.set(this.billKey, JSON.stringify(bill));
  }
}
