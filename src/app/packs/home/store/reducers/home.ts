import { Action } from '@ngrx/store'
import { PolyState, ReducerCreators } from '../../../../ngrx-poly'
import { Todo } from '../../models/Todo'
import { homeActions } from '../actions'

const homeReducer = ReducerCreators.createDepthOneReducer(homeActions, (todo: Todo) => todo.id)

export function reducer(state: PolyState<Todo>, action: Action): PolyState<Todo> {
  return homeReducer(state, action)
}
