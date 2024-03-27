import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Reservation, Reservations } from '../entities/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private _endpoint: string = 'http://localhost:8080/pate_d_or/resa';

  public reservations?: Reservation[];

  public reservation?: Reservation;

  constructor(private _httpClient: HttpClient) {}

  public getAllByRestaurantId(
    restaurantId: string | null
  ): Observable<Reservations> {
    return this._httpClient.get<Reservations>(
      `${this._endpoint}/restaurant/${restaurantId}`
    );
  }

  public granReservation(reservation: Reservation): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Autres en-têtes si nécessaire
      }),
    };
    return this._httpClient.put<Reservation>(
      `${this._endpoint}/${reservation.id}`,
      {
        id: reservation.id,
        status: 'gran',
      },
      options
    );
  }
}
