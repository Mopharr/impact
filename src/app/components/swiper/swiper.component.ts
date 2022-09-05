import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  template: `<swiper
    [slidesPerView]="3"
    [spaceBetween]="30"
    [pagination]="{
      clickable: true
    }"
    class="mySwiper"
  >
  </swiper>`,
  styleUrls: ['./swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
