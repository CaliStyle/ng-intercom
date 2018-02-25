import { ActionReducerMap} from '@ngrx/store'
import * as fromHome from './home'

/**
 * Default State
 */
export interface State {
  home: fromHome.State
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  home: fromHome.reducer
}

/**
 * Home State
 */
export const getHomeState = (state: State) => state['home']
