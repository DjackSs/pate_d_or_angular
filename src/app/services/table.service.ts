import { Injectable } from '@angular/core';
import { Table } from '../entities/Restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TableService 
{

  private readonly tableKey = "table";

  constructor(private httpClient: HttpClient, private storageService: StorageService){}

  public getTablesByIdRestaurant(restaurantId:number):Observable<Table[]>
  {
    return this.httpClient.get<Table[]>("http://localhost:8080/pate_d_or/table/resto/"+restaurantId); 
  }

  public getTablesById(restaurantId:number):Observable<Table>
  {
    return this.httpClient.get<Table>("http://localhost:8080/pate_d_or/table/"+restaurantId); 
  }

  //------------------------------------------
  //storage

  public saveTable(table:Table):void
  {
    this.storageService.set(this.tableKey, JSON.stringify(table));

  }

  public getTable():Table | null
  {
    let result = null;
    const table = this.storageService.get(this.tableKey);
    
    if(table) result = JSON.parse(table);

    return result;
  }


}
