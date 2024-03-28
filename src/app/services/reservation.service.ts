import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, tap } from 'rxjs';
import { Reservation, Reservations } from '../entities/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private _endpoint: string = 'http://localhost:8080/pate_d_or/resa';
  private readonly _httpHeadersOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private readonly _granReservationState: Object = {
    state: 'gran',
  };
  private readonly _denyReservationState: Object = {
    state: 'deni',
  };
  private _reservations$ = new Subject<Reservations>();

  public readonly reservations$: Observable<Reservations> =
    this._reservations$.asObservable();

  constructor(private _httpClient: HttpClient) {}

  public getAllByRestaurantId(restaurantId: string | null): void {
    this._httpClient
      .get<Reservations>(`${this._endpoint}/restaurant/${restaurantId}`)
      .pipe(
        map((reservation) =>
          reservation.sort((a, b) =>
            a.reservationTime.localeCompare(b.reservationTime)
          )
        )
      )
      .subscribe((reservations) => {
        this._reservations$.next(reservations);
      });
  }

  public updateReservationState(
    reservation: Reservation,
    isGranted: boolean
  ): void {
    this._httpClient
      .put<Reservation>(
        `${this._endpoint}/${reservation.id}`,
        isGranted ? this._granReservationState : this._denyReservationState,
        this._httpHeadersOptions
      )
      .pipe(
        // Sending back reservations list after  reservation state modification
        tap(() =>
          this.getAllByRestaurantId(reservation.table.restaurant.id.toString())
        )
      )
      .subscribe();
  }
}
