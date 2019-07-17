import { PolyState, PolyAction } from '../../../../ngrx-poly-wip'
import { User } from '../../models/User'
import { create500Reducer } from '../config'

const usersReducer = create500Reducer('users', (user: User) => user.id)

export function reducer(state: PolyState<User>, action: PolyAction): PolyState<User> {
  return usersReducer(state, action)
}
