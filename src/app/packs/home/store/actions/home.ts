import { Action } from '@ngrx/store'
import { type } from '../../../../utils/type.util'

export const ActionTypes = {
  HELLO_WORLD:    type('[Home] Hello World'),
  TRAILS:         type('[Home] Trails'),
  TRAILS_SUCCESS: type('[Home] Trails Success'),
  TRAILS_FAILED:  type('[Home] Trails Failed')
}

// Home Hello World
export class HelloWorldAction implements Action {
  type = ActionTypes.HELLO_WORLD
  constructor(public payload: any) { }
}

// Home Trails
export class TrailsAction implements Action {
  type = ActionTypes.TRAILS
  constructor(public payload: any) { }
}
export class TrailsSuccessAction implements Action {
  type = ActionTypes.TRAILS_SUCCESS
  constructor(public payload: any) { }
}
export class TrailsFailedAction implements Action {
  type = ActionTypes.TRAILS_FAILED
  constructor(public payload: any) { }
}

export type Actions
  = HelloWorldAction
  | TrailsAction
  | TrailsSuccessAction
  | TrailsFailedAction
