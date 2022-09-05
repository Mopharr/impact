import { Component, OnInit } from '@angular/core';
import { faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  faStar = faStar;
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;

  constructor() {}

  ngOnInit(): void {}
}
