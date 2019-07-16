import { TypedPolyAction } from './action'
import { Op } from './operations'

interface WithMetadata {
  type: string
  entity: string
  feature: string
  operation: Op
}

type CreatorFn<T> = (payload: T) => TypedPolyAction<T>
export type PolyActionCreator<T> = CreatorFn<T> & WithMetadata

/**
 * Semi-internal method to create actions for ngrx
 *
 * @param feature the optional feature module name for the action, used to distinguish the action type
 * @param entity the name of the entity being acted on
 * @param operation the ngrx action operation to perform
 *
 * @returns a function to create an action
 */
export function createPolyAction<T>(feature: string = null, entity: string, operation: Op): PolyActionCreator<T> {
  const type = _constructActionTypeFromParameters(feature, entity, operation)

  const fn: CreatorFn<T> = (payload = null) => ({
    type,
    feature,
    entity,
    operation,
    payload,
  })

  return defineMetadata(type, feature, entity, operation, fn)
}

/**
 * @internal
 *
 * construct an action type string based on given parameters
 *
 * @param feature the optional feature module name for the action, used to distinguish the action type
 * @param entity the name of the entity being acted on
 * @param operation the ngrx action operation to perform
 */
export function _constructActionTypeFromParameters(feature: string = null, entity: string, operation: Op): string {
  let type = 'ngrx-poly/'
  if (feature) {
    type += feature + '/'
  }
  type += entity + '/' + operation

  return type
}

/**
 * @internal
 *
 * defines type key on creator function
 *
 * @param type
 * @param creator
 */
function defineMetadata<T>(type: string, feature: string, entity: string, operation: string, creator: CreatorFn<T>): PolyActionCreator<T> {
  let mutable = Object.defineProperty(creator, 'type', {
    value: type,
    writable: false,
  })

  mutable = Object.defineProperty(mutable, 'feature', {
    value: feature,
    writable: false,
  })

  mutable = Object.defineProperty(mutable, 'entity', {
    value: entity,
    writable: false,
  })

  mutable = Object.defineProperty(mutable, 'operation', {
    value: operation,
    writable: false,
  })

  return mutable
}
