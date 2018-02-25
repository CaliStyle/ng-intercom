import { Routes, RouterModule } from '@angular/router'
import { FiveZeroZeroComponent } from './500.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: FiveZeroZeroComponent
  }
]

export const fiveZeroZeroRouter = RouterModule.forChild(ROUTES)
