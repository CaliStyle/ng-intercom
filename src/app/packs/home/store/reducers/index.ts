import { ActionReducerMap } from '@ngrx/store'
import * as fromHome from './home'
import { PolyState } from '../../../../ngrx-poly'
import { Todo } from '../../models/Todo'

/**
 * Default State
 */
export interface State {
  home: PolyState<Todo>
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  home: fromHome.reducer,
}
