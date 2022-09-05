import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMobile, } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faFacebook, faLinkedin,faTwitter, } from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-navtop',
  templateUrl: './navtop.component.html',
  styleUrls: ['./navtop.component.css'],
})
export class NavtopComponent implements OnInit {
  faEnvelope = faEnvelope;
  faMobile = faMobile;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;

  constructor() {}

  ngOnInit(): void {}
}
