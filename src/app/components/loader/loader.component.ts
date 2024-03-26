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

    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 5000);
  }
}
