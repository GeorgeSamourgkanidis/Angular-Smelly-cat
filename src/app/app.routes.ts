import { Routes } from '@angular/router';
import { AdoptKittensComponent } from './features/adopt-kittens/adopt-kittens.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { BlogComponent } from './features/blog/blog.component';
import { KittyStoriesComponent } from './features/kitty-stories/kitty-stories.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: 'adopt-kittens', component: AdoptKittensComponent },
  { path: 'kitty-stories', component: KittyStoriesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
];
