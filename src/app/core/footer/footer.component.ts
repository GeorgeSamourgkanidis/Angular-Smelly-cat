import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { Route } from '../../models/routes';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, RouterModule, MatToolbarModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  pages: Route[] = [
    {
      label: 'Privacy Policy',
      link: '/privacy-policy'
    },
    {
      label: 'Terms & Conditions',
      link: '/terms-conditions'
    },
    {
      label: 'Blog',
      link: '/blog'
    },
    {
      label: 'Support',
      link: '/support'
    }
  ];

  faDiscord = faDiscord
  faTwitter = faTwitter
  faInstagram = faInstagram

  constructor(private router: Router) {}

  navigateTo(link: string) {
    // this.router.navigateByUrl(link);
    // window.scrollTo(0, 0)
  }
}
