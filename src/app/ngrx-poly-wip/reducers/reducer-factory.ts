import { ActionReducer } from '@ngrx/store'
import { PolyAction } from '../actions/action'
import { PolyConfig, PolyState, defaultPolyConfig } from '../config/config'
import { createPolyReducer, On } from './create-poly-reducer'

export function createReducerFactory(feature: string, config: PolyConfig = {}) {
  config = { ...defaultPolyConfig, ...config }
  return function<T extends object>(
    entity: string,
    keyGetter: (obj: T) => string | number,
    ...ons: On<PolyState<T>>[]
  ): ActionReducer<PolyState<T>, PolyAction> {
    return createPolyReducer(config.initialState, feature, entity, keyGetter, ...ons)
  }
}
