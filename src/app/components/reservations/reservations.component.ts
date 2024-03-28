import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Reservation, Reservations } from '../../entities/reservation';
import { ReservationService } from '../../services/reservation.service';
import { NavbarService } from '../../services/navbar.service';
import { Restaurant } from '../../entities/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent implements OnInit, OnDestroy {
  private _unsubscribe$ = new Subject<void>();

  public reservations$?: Observable<Reservations>;

  public _currentRestaurant?: Restaurant | null;

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

    this._currentRestaurant = this._restaurantService.getRestaurant();
  }

  public yesToReservation(reservation: Reservation): void {
    this._reservationService.updateReservationState(reservation, true);
  }

  public noToReservation(reservation: Reservation): void {
    this._reservationService.updateReservationState(reservation, false);
  }

  public handleReservationTable(): void {
    // Handle redirection to the table reserved
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }
}
