import { Component, OnInit } from '@angular/core';
import { faWaveSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  faWaveSquare = faWaveSquare;
  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}
}
