import { Action } from '@ngrx/store'
import { type } from '../../../../utils/type.util'

export const ActionTypes = {
  HELLO_WORLD:    type('[Home] Hello World'),
  FABRIX:         type('[Home] Fabrix'),
  FABRIX_SUCCESS: type('[Home] Fabrix Success'),
  FABRIX_FAILED:  type('[Home] Fabrix Failed')
}

// Home Hello World
export class HelloWorldAction implements Action {
  type = ActionTypes.HELLO_WORLD
  constructor(public payload: any) { }
}

// Home Fabrix
export class FabrixAction implements Action {
  type = ActionTypes.FABRIX
  constructor(public payload: any) { }
}
export class FabrixSuccessAction implements Action {
  type = ActionTypes.FABRIX_SUCCESS
  constructor(public payload: any) { }
}
export class FabrixFailedAction implements Action {
  type = ActionTypes.FABRIX_FAILED
  constructor(public payload: any) { }
}

export type Actions
  = HelloWorldAction
  | FabrixAction
  | FabrixSuccessAction
  | FabrixFailedAction
