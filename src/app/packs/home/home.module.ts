import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../../shared/shared.module'
import { HomeComponent } from './home.component'
import { homeRouter } from './home.router'

// Handle Effects for this module
import { EffectsModule } from '@ngrx/effects'
import { HomeEffects } from './store/effects/home'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRouter,
    // EffectsModule.forFeature([ HomeEffects ]),
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule { }
