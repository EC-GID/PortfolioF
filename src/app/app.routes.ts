import { Routes } from '@angular/router';

import { Hero } from './hero/hero';
import { About } from './about/about';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', component: Hero },
  { path: 'about', component: About },
  { path: 'education', component: Education },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'footer', component: Footer }
];
