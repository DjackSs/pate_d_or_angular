import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Restaurant } from '../../entities/Restaurant';
import { Reservations } from '../../entities/reservation';
import { NavbarService } from '../../services/navbar.service';
import { ReservationService } from '../../services/reservation.service';
import { RestaurantService } from '../../services/restaurant.service';
import { ReservationComponent } from '../reservation/reservation.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, ReservationComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent implements OnInit, OnDestroy {
  private _unsubscribe$ = new Subject<void>();

  public reservations$?: Observable<Reservations>;
  public currentRestaurant?: Restaurant | null;
  public isStateToManage?: boolean = false;
  public isGranToManage?: boolean = false;
  public selectedState: string = '';

  constructor(
    private _reservationService: ReservationService,
    private _route: ActivatedRoute,
    private navbarService: NavbarService,
    private _restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    const restaurantId: string | null = this._route.snapshot.paramMap.get('id');

    this.reservations$ = this._reservationService.reservations$;

    this._reservationService.getAllByRestaurantId(restaurantId);

<<<<<<< HEAD
    this._currentRestaurant = this._restaurantService.getRestaurant();
=======
    this.currentRestaurant = this._restaurantService.getRestaurant();

    console.log(this.reservations$.subscribe((res) => console.log(res)));
>>>>>>> 442e38a7b20d8809a95199be063b9da20e3b2485
  }

  public areReservationsEmptyOrNotSelectedState(
    reservations: Reservations,
    state: string
  ): boolean {
    if (!reservations || reservations.length === 0) {
      return true;
    }

    if (state === 'hold') {
      return !reservations.some((reservation) => reservation.state === 'hold');
    }

    if (state === 'gran') {
      return !reservations.some((reservation) => reservation.state === 'gran');
    }

    return false;
  }

  public displayReservationsStateToManage(state: string): void {
    this.selectedState = state;
    this.isStateToManage = !this.isStateToManage;
    this.isGranToManage = false;
  }

  public displayReservationsToManage(state: string): void {
    this.selectedState = state;
    this.isGranToManage = !this.isGranToManage;
    this.isStateToManage = false;
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }
}
