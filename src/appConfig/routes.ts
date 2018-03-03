import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/packs/home/home.module#HomeModule'
  },
  {
    path: '500',
    loadChildren: 'app/packs/500/500.module#FiveZeroZeroModule'
  },
  {
    path: '404',
    loadChildren: 'app/packs/404/404.module#FourZeroFourModule'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]
