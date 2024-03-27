import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private showNavbarSubject = new BehaviorSubject<boolean>(true); // Initialisation à false par défaut
  showNavbar$ = this.showNavbarSubject.asObservable();

  constructor() { }

  setShowNavbar(show: boolean) {
    this.showNavbarSubject.next(show);
  }
}
