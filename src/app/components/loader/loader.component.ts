import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    const delay = 2000;

    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, delay);
  }
}
