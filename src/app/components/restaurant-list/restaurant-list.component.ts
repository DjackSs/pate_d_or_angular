import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { Restaurants } from '../../entities/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';

import { LogoutComponent } from '../logout/logout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [
    RestaurantCardComponent,
    CommonModule,
    LogoutComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss',
})
export class RestaurantListComponent implements OnInit {
  public restaurants$!: Observable<Restaurants>;

  constructor(private restaurantService: RestaurantService, private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.setShowNavbar(true);
    this.restaurants$ = this.restaurantService.getRestaurants();
  }
}
