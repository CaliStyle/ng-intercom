import { Action } from '@ngrx/store'

export interface PolyAction extends Action {
  type: string
  feature: string
  entity: string
  operation: string
  payload: any
}

export interface TypedPolyAction<T> extends PolyAction {
  type: string
  feature: string
  entity: string
  operation: string
  payload: T
}
