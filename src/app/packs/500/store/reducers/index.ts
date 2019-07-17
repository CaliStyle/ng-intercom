import { ActionReducerMap } from '@ngrx/store'
import * as fromUsers from './users'
import { PolyState } from '../../../../ngrx-poly-wip'
import { User } from '../../models/User'

/**
 * Default State
 */
export interface State {
  users: PolyState<User>
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  users: fromUsers.reducer,
}
