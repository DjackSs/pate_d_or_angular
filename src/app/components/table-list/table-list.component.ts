import { Component } from '@angular/core';
import { Restaurant, Table } from '../../entities/Restaurant';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';
import { TableService } from '../../services/table.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})
export class TableListComponent 
{
  public tables$!:Observable<Table[]>;
  public restaurant!:Restaurant | null;

  constructor(private restaurantService: RestaurantService, private tableService: TableService){}

  ngOnInit()
  {
      this.restaurant = this.restaurantService.getRestaurant();

      if(this.restaurant) this.tables$ = this.tableService.getTablesByIdRestaurant(this.restaurant.id);

  }



}
