import { PolyState, PolyAction } from '../../../../ngrx-poly'
import { Todo } from '../../models/Todo'
import { createHomReducer } from '../config'

const homeReducer = createHomReducer('home', (todo: Todo) => todo.id)

export function reducer(state: PolyState<Todo>, action: PolyAction): PolyState<Todo> {
  return homeReducer(state, action)
}
