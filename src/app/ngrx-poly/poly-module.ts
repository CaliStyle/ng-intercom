import { ModuleWithProviders, NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { PolyConfig, POLY_CONFIG } from './config/config'
import { POLY_FEATURE } from './config/feature'
import { GETTERS, getters } from './config/getters'
import { NgrxPolyHelperService } from './config/helper'
import { LevelOneEffects } from './effects/level-one-effects'

@NgModule({
  imports: [EffectsModule.forFeature([LevelOneEffects])],
  providers: [NgrxPolyHelperService],
})
export class NgrxPolyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgrxPolyModule,
      providers: [],
    }
  }

  static forFeature<T, U>(feature: string, config: PolyConfig<T, U>): ModuleWithProviders {
    return {
      ngModule: NgrxPolyModule,
      providers: [
        { provide: POLY_CONFIG, useValue: config },
        { provide: POLY_FEATURE, useValue: feature },
        { provide: GETTERS, useValue: config.getters ? getters(config.getters) : getters() },
      ],
    }
  }
}
