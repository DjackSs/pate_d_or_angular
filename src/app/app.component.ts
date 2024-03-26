import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'pate_d_or_angular';
}
