import { Component, OnInit } from '@angular/core';
import { faCircleCheck, faPlay} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  faCircleCheck = faCircleCheck;
  faPlay = faPlay;

  constructor() {}

  ngOnInit(): void {}
}
