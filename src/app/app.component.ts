import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginService } from './services/login.service';
import { NavbarService } from './services/navbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'pate_d_or_angular';

  showNavbar = true;

  constructor(
    private loginService: LoginService,
    private navbarService: NavbarService
  ) {
    this.navbarService.showNavbar$.subscribe(
      (show) => (this.showNavbar = show)
    );
  }

  ngOnInit(): void {
    // Vérifier l'état de connexion lors de l'initialisation du composant
    this.navbarService.setShowNavbar(true);
  }
}
