import { Component, OnInit } from '@angular/core';
import {
  faPlayCircle,
  faGem,
  faLocation,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  faGem = faGem;
  faLocation = faLocation;

  constructor() {}

  ngOnInit(): void {}
}
