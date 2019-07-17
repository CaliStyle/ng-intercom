import { Op } from './ops'

export function createActionType(operation: Op, ...path: string[]) {
  return `ngrx-poly/${path.join('/')}/${operation}`
}
