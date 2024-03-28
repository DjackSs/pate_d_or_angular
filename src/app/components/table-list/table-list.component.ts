import { Component } from '@angular/core';
import { Restaurant, Table } from '../../entities/Restaurant';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';
import { TableService } from '../../services/table.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';

import { OrderComponent } from '../order/order.component';
import { Router } from '@angular/router';

import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, LoaderComponent, OrderComponent],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
})
export class TableListComponent {
  public tables$!: Observable<Table[]>;
  public restaurant!: Restaurant | null;


  constructor(
    private restaurantService: RestaurantService,
    private tableService: TableService,
    private navbarService: NavbarService,
    private _router: Router
  ) {}


  ngOnInit() {
    this.navbarService.setShowNavbar(true);
    this.restaurant = this.restaurantService.getRestaurant();

    if (this.restaurant)
      this.tables$ = this.tableService.getTablesByIdRestaurant(
        this.restaurant.id
      );
  }


  public toOrder(table:Table)
  {

    this._router.navigateByUrl(`order/table/${table.id}`);

  }




}
