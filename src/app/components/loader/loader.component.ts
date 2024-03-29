import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/lottie-loader.json',
    autoplay: true,
    loop: true,
  };

  constructor(private router: Router, private navbarService: NavbarService) {}

  ngOnInit(): void {

    this.navbarService.setShowNavbar(false);
    const delay:number = 1000;

    setTimeout(() => {
      this.router.url == '/'
        ? this.router.navigateByUrl('/login')
        : this.router.navigateByUrl(this.router.url);
    }, delay);

  }
}
