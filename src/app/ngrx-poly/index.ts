// *LEGACY*
export { reduceEntityArray } from '../ngrx-poly/utils/reduce-entity-array'
// New module exports
export { createFeatureActionMap } from './actions/create-action-map'
export { EffectCreators } from './effects/effects-creators'
export { ReducerCreators } from './reducers/reducer-creators'
export { defaultInitialState, PolyState } from './reducers/state'
export { List } from './types/list'
export { Query } from './types/query'
export { DepthOneDataServiceBase } from './effects/depth-one-data-service'
export { DepthTwoDataServiceBase } from './effects/depth-two-data-service'
