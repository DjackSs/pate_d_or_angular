import { Component, Input } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Orders, Order, OrderTable } from '../../entities/order'; import { Table } from '../../entities/Restaurant';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../services/table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectComponent } from '../select/select.component';
import { DishesComponent } from '../dishes/dishes.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, LoaderComponent, SelectComponent, DishesComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent 
{
  public table$!:Observable<Table>;
  public order$?: Observable<Order>;

  public tableSelectOptions!:string[];
  public orderSelectOptions!:string[];
  
  constructor(private orderService: OrderService, private tableService: TableService, private route: ActivatedRoute){}

  ngOnInit()
  {
    const tableId:number | null = Number(this.route.snapshot.paramMap.get("id"));
    this.table$ = this.tableService.getTableById(tableId);

    //récupérer une commande déja existante => limiter les commandes à 1 par table
    this.order$ = this.orderService.getOrderByTableId(tableId);

    this.tableSelectOptions = ["Libre", "Occupé"];
    this.orderSelectOptions = ["Nouvelle","Prise","Servie","Payée"];

  }

  public updateTable(table:Table, tableSelectValue:string)
  {

    //libère en status null
    if(tableSelectValue === this.tableSelectOptions[0])
    {
      this.tableService.freeTable(table);

    }

    //table en status "pres"
    if(tableSelectValue === this.tableSelectOptions[1])
    {
      this.tableService.updateTablePresent(table);
    }
    
  }

  public updateOrder(table:Table, orderSelectValue:string)
  {
    console.log(orderSelectValue);
    // this.order$ = this.orderService.createOrder(table)

    switch(orderSelectValue)
    {
      case this.orderSelectOptions[0]:
        this.order$?.subscribe(result => 
          {
            if(!result) this.order$ = this.orderService.createOrder(table)
          });
        break;
      case this.orderSelectOptions[1]:
        break;
      case this.orderSelectOptions[2]:
        break;
      case this.orderSelectOptions[3]:
        break;
      default:
        break;
    }

  }

  public creatOrder(OrderTable:OrderTable)
  {
    this.order$ = this.orderService.createOrder(OrderTable);

  }



}
