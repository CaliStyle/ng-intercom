import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
]
export const homeRouter = RouterModule.forChild(ROUTES)
