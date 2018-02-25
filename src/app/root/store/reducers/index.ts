import { createSelector, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import * as fromApp from './app'

/**
 * Default State
 */
export interface State {
  [key: string]: Object
  app: fromApp.State,
  router: RouterReducerState
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  router: routerReducer
}

/**
 * App State
 */
export const getAppState = (state: State) => state.app
/**
 * Router State
 */
export const getRouterState = (state: State) => state.router

/**
 * TO CONSOLE Logger
 * @param {ActionReducer<{}>} reducer
 * @returns {ActionReducer<{}>}
 */
export function logger(reducer: ActionReducer<{}>): ActionReducer<{}> {
  return function(state: {}, action: any): {} {
    console.log('state', state)
    console.log('action', action)
    return reducer(state, action)
  }
}

/**
 * Meta Reducers
 */
export const metaReducers: MetaReducer<{}>[] = [logger]
