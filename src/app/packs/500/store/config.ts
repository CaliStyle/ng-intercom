import { PolyConfig, createReducerFactory } from '../../../ngrx-poly-wip'
import { UsersDataService } from './data/users'

export const fiveohohPolyConfig: PolyConfig = {
  dataServices: {
    users: UsersDataService,
  },
}

export const create500Reducer = createReducerFactory('500')
