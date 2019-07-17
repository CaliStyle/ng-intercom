import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../../shared/shared.module'
import { HomeComponent } from './home.component'
import { homeRouter } from './home.router'

// Handle Effects for this module
import { EffectsModule } from '@ngrx/effects'
import { HomeEffects } from './store/effects/home'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { HomeDataService } from './store/data/home'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRouter,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([HomeEffects]),
    // EffectsModule.forFeature([ HomeEffects ]),
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
  providers: [HomeDataService],
})
export class HomeModule {}
