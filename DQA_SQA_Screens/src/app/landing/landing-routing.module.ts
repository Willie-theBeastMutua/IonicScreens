import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';

const routes: Routes = [
  {
  path: 'landing',
  component: LandingPage,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
    },
    {
      path: '',
      redirectTo: '/landing/home',
      pathMatch: 'full'
    }
  ]
},
{
  path: '',
  redirectTo: '/landing/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
