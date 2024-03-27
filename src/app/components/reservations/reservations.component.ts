import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Reservation, Reservations } from '../../entities/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent {
  public reservations$!: Observable<Reservations>;

  constructor(
    private _reservationService: ReservationService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const restaurantId: string | null = this._route.snapshot.paramMap.get('id');

    this.reservations$ = this._reservationService
      .getAllByRestaurantId(restaurantId)
      .pipe(
        map((reservation) =>
          reservation.sort((a, b) =>
            a.reservationTime.localeCompare(b.reservationTime)
          )
        )
      );
  }

  public granReservation(reservation: Reservation): void {
    console.log(reservation);
    this._reservationService.granReservation(reservation);
  }
  public denyReservation(reservation: Reservation) {}
}
