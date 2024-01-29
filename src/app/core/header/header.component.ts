import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Route } from '../../models/routes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pages: Route[] = [
    {
      label: 'Adopt Kittens',
      link: '/adopt-kittens'
    },
    {
      label: 'Kitty Stories',
      link: '/kitty-stories'
    },
    {
      label: 'About Us',
      link: '/about-us'
    },
    {
      label: 'Blog',
      link: '/blog'
    },
    {
      label: 'Contact',
      link: '/contact'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
    window.scrollTo(0, 0)
  }
}
