import { Component, HostBinding, OnInit } from '@angular/core';
import Lottie, { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {

   options: AnimationOptions = {    
    path: '/assets/lottie/lottie-loader.json', 
    autoplay: true,
    loop: true
  };  

  constructor() { }  

  ngOnInit(): void {  }
}
