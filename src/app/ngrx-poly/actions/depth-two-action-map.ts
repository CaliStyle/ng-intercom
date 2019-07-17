import { createAction, props } from '@ngrx/store'
import { List } from '../types/list'
import { Query } from '../types/query'
import { ActionMapD2 } from './action-map'
import { createActionType } from './create-action-type'
import { mapObjToPayloadD1 } from './depth-one-action-map'
import { Op } from './ops'

export function depthTwo(feature: string) {
  return <T, U, Tkey extends string, Ukey extends string>(parent: Tkey, entity: Ukey): ActionMapD2<T, U, Tkey, Ukey> => {
    return {
      findAll: createAction(
        createActionType(Op.FIND_ALL, feature, entity),
        (parentItem: T, query: Query) =>
          ({
            [parent]: parentItem,
            query,
          } as any)
      ),
      findAllSuccess: createAction(createActionType(Op.FIND_ALL_SUCCESS, feature, entity), props<List<U>>()),
      findAllFailure: createAction(createActionType(Op.FIND_ALL_FAILURE, feature, entity), (error: any) => ({ error })),

      search: createAction(
        createActionType(Op.SEARCH, feature, entity),
        (parentItem: T, query: Query) => ({ [parent]: parentItem, query } as any)
      ),
      searchSuccess: createAction(createActionType(Op.SEARCH_SUCCESS, feature, entity), props<List<U>>()),
      searchFailure: createAction(createActionType(Op.SEARCH_FAILURE, feature, entity), (error: any) => ({ error })),

      findOne: createAction(
        createActionType(Op.FIND_ONE, feature, entity),
        (parentItem: T, id: string | number) =>
          ({
            [parent]: parentItem,
            id,
          } as any)
      ),
      findOneSuccess: createAction(createActionType(Op.FIND_ONE_SUCCESS, feature, entity), (item: U) => mapObjToPayloadD1(entity, item)),
      findOneFailure: createAction(createActionType(Op.FIND_ONE_FAILURE, feature, entity), (error: any) => ({ error })),

      update: createAction(createActionType(Op.UPDATE, feature, entity), (parentItem: T, item: U) =>
        mapObjToPayloadD2(parent, entity, parentItem, item)
      ),
      updateSuccess: createAction(createActionType(Op.UPDATE_SUCCESS, feature, entity), (item: U) => mapObjToPayloadD1(entity, item)),
      updateFailure: createAction(createActionType(Op.UPDATE_FAILURE, feature, entity), (error: any) => ({ error })),

      create: createAction(createActionType(Op.CREATE, feature, entity), (parentItem: T, item: U) =>
        mapObjToPayloadD2(parent, entity, parentItem, item)
      ),
      createSuccess: createAction(createActionType(Op.CREATE_SUCCESS, feature, entity), (item: U) => mapObjToPayloadD1(entity, item)),
      createFailure: createAction(createActionType(Op.CREATE_FAILURE, feature, entity), (error: any) => ({ error })),

      delete: createAction(
        createActionType(Op.DELETE, feature, entity),
        (parentItem: T, id: string | number) =>
          ({
            [parent]: parentItem,
            id,
          } as any)
      ),
      deleteSuccess: createAction(createActionType(Op.DELETE_SUCCESS, feature, entity), (item: U) => mapObjToPayloadD1(entity, item)),
      deleteFailure: createAction(createActionType(Op.DELETE_FAILURE, feature, entity), (error: any) => ({ error })),

      select: createAction(createActionType(Op.SELECT, feature, entity), (id: string | number) => ({ id })),
      deselect: createAction(createActionType(Op.DESELECT, feature, entity)),

      _parent: parent,
      _entity: entity,
    }
  }
}

function mapObjToPayloadD2<T, U, Tkey extends string, Ukey extends string>(parent: Tkey, entity: Ukey, parentItem: T, item: U) {
  return {
    [parent]: parentItem,
    [entity]: item,
  } as any
}
