import { createAction, props } from '@ngrx/store'
import { List } from '../types/list'
import { Query } from '../types/query'
import { ActionMapD1 } from './action-map'
import { createActionType } from './create-action-type'
import { Op } from './ops'

export function depthOne(feature: string) {
  return <T, U extends string>(entity: U): ActionMapD1<T, U> => {
    return {
      findAll: createAction(createActionType(Op.FIND_ALL, feature, entity), (query: Query) => ({ query })),
      findAllSuccess: createAction(createActionType(Op.FIND_ALL_SUCCESS, feature, entity), props<List<T>>()),
      findAllFailure: createAction(createActionType(Op.FIND_ALL_FAILURE, feature, entity), (error: any) => ({ error })),

      search: createAction(createActionType(Op.SEARCH, feature, entity), (query: Query) => ({ query })),
      searchSuccess: createAction(createActionType(Op.SEARCH_SUCCESS, feature, entity), props<List<T>>()),
      searchFailure: createAction(createActionType(Op.SEARCH_FAILURE, feature, entity), (error: any) => ({ error })),

      findOne: createAction(createActionType(Op.FIND_ONE, feature, entity), (id: string | number) => ({ id })),
      findOneSuccess: createAction(createActionType(Op.FIND_ONE_SUCCESS, feature, entity), (item: T) => mapObjToPayloadD1(entity, item)),
      findOneFailure: createAction(createActionType(Op.FIND_ONE_FAILURE, feature, entity), (error: any) => ({ error })),

      update: createAction(createActionType(Op.UPDATE, feature, entity), (item: T) => mapObjToPayloadD1(entity, item)),
      updateSuccess: createAction(createActionType(Op.UPDATE_SUCCESS, feature, entity), (item: T) => mapObjToPayloadD1(entity, item)),
      updateFailure: createAction(createActionType(Op.UPDATE_FAILURE, feature, entity), (error: any) => ({ error })),

      create: createAction(createActionType(Op.CREATE, feature, entity), (item: T) => mapObjToPayloadD1(entity, item)),
      createSuccess: createAction(createActionType(Op.CREATE_SUCCESS, feature, entity), (item: T) => mapObjToPayloadD1(entity, item)),
      createFailure: createAction(createActionType(Op.CREATE_FAILURE, feature, entity), (error: any) => ({ error })),

      delete: createAction(createActionType(Op.DELETE, feature, entity), (id: string | number) => ({ id })),
      deleteSuccess: createAction(createActionType(Op.DELETE_SUCCESS, feature, entity), (item: T) => mapObjToPayloadD1(entity, item)),
      deleteFailure: createAction(createActionType(Op.DELETE_FAILURE, feature, entity), (error: any) => ({ error })),

      select: createAction(createActionType(Op.SELECT, feature, entity), (id: string | number) => ({ id })),
      deselect: createAction(createActionType(Op.DESELECT, feature, entity)),
      _entity: entity,
    }
  }
}

export function mapObjToPayloadD1<T, U extends string>(entity: U, item: T) {
  return {
    [entity]: item,
  } as any
}
