import { Component, Input } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Orders } from '../../entities/order';
import { Table } from '../../entities/Restaurant';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../services/table.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent 
{
  public orders$!:Observable<Orders>;
  public table!:Table |null;


  constructor(private orderService: OrderService, private tableService: TableService, private route: ActivatedRoute){}

  ngOnInit()
  {
    this.table = this.tableService.getTable();

    if(this.table) this.orders$ = this.orderService.getOrderByTableId(this.table.id);
    
  
  }



}
