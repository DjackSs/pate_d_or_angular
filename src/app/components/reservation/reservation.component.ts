import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Reservation, Reservations } from '../../entities/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent {
  private _unsubscribe$ = new Subject<void>();

  @Input()
  public reservations!: Reservations;
  @Input()
  public state!: string;

  constructor(private _reservationService: ReservationService) {}

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
    this._unsubscribe$.complete();
  }
}
