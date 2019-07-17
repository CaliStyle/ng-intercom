import { Todo } from '../../models/Todo'
import { homeActionsCreator } from './actions'

export const homeActions = homeActionsCreator.depthOne<Todo, 'todo'>('todo')
