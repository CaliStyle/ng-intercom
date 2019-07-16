import { ActionReducer } from '@ngrx/store'
import { PolyAction } from '../actions/action'
import { PolyConfig, PolyState } from '../config/config'
import { createPolyReducer, On } from './create-poly-reducer'

export function createReducerFactory(feature: string, config: PolyConfig<any, any>) {
  return function<T extends object>(
    entity: string,
    keyGetter: (obj: T) => string,
    ...ons: On<PolyState<T>>[]
  ): ActionReducer<PolyState<T>, PolyAction> {
    return createPolyReducer(config.initialState, feature, entity, keyGetter, ...ons)
  }
}
