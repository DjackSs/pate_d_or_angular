import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private endpoint: string = 'http://localhost:8080';
  private _currentUser?: User;
  private _isAuthenticated$ = new Subject<boolean>();

  public isAuthenticated$: Observable<boolean> =
    this._isAuthenticated$.asObservable();

  constructor(
    private _router: Router,
    private _storageService: StorageService,
    private _httpClient: HttpClient
  ) {}

  private notifyAuthenticationState(logInSuccess: boolean): void {
    this._isAuthenticated$.next(logInSuccess);
  }

  public isAuthenticated(): boolean {
    return this._storageService.get('token') != null;
  }

  public logIn(email: string, password: string): Observable<User | null> {
    return this._httpClient
      .post<User>(`${this.endpoint}/login`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          if (user) {
            this._currentUser = user;
            this._storageService.set(
              'USER_KEY',
              JSON.stringify(this._currentUser)
            );
            this._storageService.set('token', this._currentUser.token);
          }

          this.notifyAuthenticationState(true);

          return user;
        }),
        catchError((e: HttpErrorResponse) => {
          console.error(e);
          return of(null);
        })
      );
  }
}
