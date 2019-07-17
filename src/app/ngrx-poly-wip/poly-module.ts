import { ModuleWithProviders, NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { PolyConfig, POLY_CONFIG, defaultPolyConfig } from './config/config'
import { POLY_FEATURE } from './config/feature'
import { GETTERS, getters } from './config/getters'
import { NgrxPolyHelperService } from './config/helper'
import { LevelOneEffects } from './effects/level-one-effects'
import { POLY_DATA_SERVICES } from './data/data-services'

@NgModule({
  imports: [EffectsModule.forFeature([LevelOneEffects])],
  providers: [NgrxPolyHelperService],
})
class NgrxPolyFeatureModule {}

@NgModule({
  imports: [EffectsModule.forRoot([LevelOneEffects])],
  providers: [NgrxPolyHelperService],
})
class NgrxPolyRootModule {}

@NgModule({
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
      ngModule: NgrxPolyRootModule,
      providers: [
        { provide: POLY_CONFIG, useValue: config },
        { provide: POLY_FEATURE, useValue: '' },
        { provide: POLY_DATA_SERVICES, useValue: { _ngRootModule: config.dataServices }, multi: true },
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
    console.log(config.dataServices)
    return {
      ngModule: NgrxPolyFeatureModule,
      providers: [
        { provide: POLY_CONFIG, useValue: config },
        { provide: POLY_FEATURE, useValue: feature },
        { provide: POLY_DATA_SERVICES, useValue: { [feature]: config.dataServices }, multi: true },
        { provide: GETTERS, useValue: getters(config.getters) },
        NgrxPolyHelperService,
        ...providers,
      ],
    }
  }
}
