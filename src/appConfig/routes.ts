import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('app/packs/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '500',
    loadChildren: () => import('app/packs/500/500.module').then(m => m.FiveZeroZeroModule)
  },
  {
    path: '404',
    loadChildren: () => import('app/packs/404/404.module').then(m => m.FourZeroFourModule)
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]
