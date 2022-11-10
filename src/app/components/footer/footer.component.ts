import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faDiamond, faHome, faEnvelope, faPhone, faPrint, faDog } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFaceboock = faFacebook
  faTwitter = faTwitter
  faInstagram = faInstagram
  faGithub = faGithub
  faLinkedin = faLinkedin
  faDiamond = faDiamond
  faHome = faHome
  faEnvelope = faEnvelope
  faPhone = faPhone
  faDog = faDog
  constructor() { }

  ngOnInit(): void {
  }

}

