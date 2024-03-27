import { Component } from '@angular/core';
import { Restaurant, Table } from '../../entities/Restaurant';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';
import { TableService } from '../../services/table.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';
import { OrderComponent } from '../order/order.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, LoaderComponent, OrderComponent],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})
export class TableListComponent 
{
  public tables$!:Observable<Table[]>;
  public restaurant!:Restaurant | null;

  constructor(private restaurantService: RestaurantService, private tableService: TableService, private router: Router){}

  ngOnInit()
  {
      this.restaurant = this.restaurantService.getRestaurant();

      if(this.restaurant) this.tables$ = this.tableService.getTablesByIdRestaurant(this.restaurant.id);

  }

  public toOrder(table:Table)
  {

    this.tableService.saveTable(table);
    this.router.navigateByUrl("order");

  }



}
