import { Injectable } from '@angular/core';
import { Table } from '../entities/Table';
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

  //------------------------------------------
  //get

  public getTablesByIdRestaurant(restaurantId:number):Observable<Table[]>
  {
    return this.httpClient.get<Table[]>("http://localhost:8080/pate_d_or/table/resto/"+restaurantId); 
  }

  public getTableById(Id:number):Observable<Table>
  {
    return this.httpClient.get<Table>("http://localhost:8080/pate_d_or/table/"+Id); 
  }

  //------------------------------------------
  //put

  public updateTablePresent(table:Table):void
  {
    if(table.state != "pres")
    {
      table.state = "pres";

      const body = 
      {
        state: "pres"

      }
      const url:string = "http://localhost:8080/pate_d_or/table/"+String(table.id);

      this.httpClient.put<Table>(url, body).subscribe();
    }
    
  }

  public freeTable(table:Table):void
  {
    if(table.state != null)
    {
      table.state = null;

      const body = 
      {
        state: table.state
      }
      const url:string = "http://localhost:8080/pate_d_or/table/"+String(table.id);

      this.httpClient.put<Table>(url, body).subscribe();
    }

  }




}
