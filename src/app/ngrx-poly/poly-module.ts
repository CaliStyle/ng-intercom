import { ModuleWithProviders, NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { PolyConfig, POLY_CONFIG, defaultPolyConfig } from './config/config'
import { POLY_FEATURE } from './config/feature'
import { GETTERS, getters } from './config/getters'
import { NgrxPolyHelperService } from './config/helper'
import { LevelOneEffects } from './effects/level-one-effects'

@NgModule({
  imports: [EffectsModule.forFeature([LevelOneEffects])],
  providers: [NgrxPolyHelperService],
})
export class NgrxPolyModule {
  /**
   * Instantiate a root-module NgrxPolyModule
   *
   * This is not safe for feature modules that have separate stores with the same name
   */
  static forRoot(config: PolyConfig = {}): ModuleWithProviders {
    config = { ...defaultPolyConfig, ...config }
    const providers = Object.values(config.dataServices)

    return {
      ngModule: NgrxPolyModule,
      providers: [
        { provide: POLY_CONFIG, useValue: config },
        { provide: POLY_FEATURE, useValue: '' },
        { provide: GETTERS, useValue: config.getters ? getters(config.getters) : getters() },
        NgrxPolyHelperService,
        ...providers,
      ],
    }
  }

  /**
   * Feature module-safe PolyModule with additional options or custom config
   */
  static forFeature(feature: string, config: PolyConfig = {}): ModuleWithProviders {
    config = { ...defaultPolyConfig, ...config }
    const providers = Object.values(config.dataServices)
    console.log({providers})
    return {
      ngModule: NgrxPolyModule,
      providers: [
        { provide: POLY_CONFIG, useValue: config },
        { provide: POLY_FEATURE, useValue: feature },
        { provide: GETTERS, useValue: getters(config.getters) },
        NgrxPolyHelperService,
        ...providers,
      ],
    }
  }
}
