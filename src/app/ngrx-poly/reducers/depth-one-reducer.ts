import { createReducer, on } from '@ngrx/store'
import { ActionMapD1 } from '../actions/action-map'
import { defaultInitialState, PolyState } from './state'
import { reduceEntityArray } from '../utils/reduce-entity-array'
import { removeFromObj, removeFromArray } from './utils'

export function depthOneReducerCreator<T extends object, Tkey extends string>(
  actionMap: ActionMapD1<T, Tkey>,
  keyGetter: (entity: T) => string | number
) {
  const entity = actionMap._entity
  return createReducer(
    defaultInitialState,
    on(actionMap.findAll, actionMap.search, (state, payload: { [key: string]: any }) => ({
      ...state,
      loaded: false,
      loading: true,
      filter: payload.filter || state.filter,
      sort: payload.sort || state.sort,
      includes: payload.includes || state.includes,
    })),
    on(actionMap.findOne, actionMap.create, actionMap.update, actionMap.delete, state => ({
      ...state,
      loaded: false,
      loading: true,
    })),
    on(actionMap.findAllSuccess, actionMap.searchSuccess, (state, action) => {
      const rows: T[] = action.rows
      const pagination = action.pagination

      const { entities, ids } = reduceEntityArray(rows, keyGetter)

      return {
        ...state,
        ids,
        entities,
        loaded: true,
        loading: false,
        total: pagination.total,
        offset: pagination.offset,
        limit: pagination.limit,
        page: pagination.page,
        pages: pagination.pages,
        filter: pagination.filter,
        sort: pagination.sort,
      }
    }),
    on(actionMap.findOneSuccess, actionMap.createSuccess, actionMap.updateSuccess, (state, payload) => {
      const newEntity = (payload[entity] as unknown) as T
      const selectedId = keyGetter(newEntity)

      const entities = { ...state.entities, [selectedId]: newEntity }
      const ids = [...state.ids, selectedId]

      return {
        ...state,
        ids,
        entities,
        selectedId,
        loaded: true,
        loading: false,
      }
    }),
    on(actionMap.deleteSuccess, (state, payload) => {
      const entityToRemove = (payload[entity] as unknown) as T
      const idToRemove = keyGetter(entityToRemove)

      const entities = removeFromObj(state.entities, idToRemove)
      const ids = removeFromArray(state.ids, idToRemove)

      const mergeObj: Partial<PolyState<T>> = {}
      if (state.selectedId === idToRemove) {
        mergeObj.selectedId = null
      }

      return {
        ...state,
        ...mergeObj,
        ids,
        entities,
        selectedId: null,
        loaded: true,
        loading: false,
      }
    }),
    on(
      actionMap.findAllFailure,
      actionMap.searchFailure,
      actionMap.findOneFailure,
      actionMap.createFailure,
      actionMap.updateFailure,
      actionMap.deleteFailure,
      (state, payload) => ({
        ...state,
        error: payload,
        loaded: true,
        loading: false,
      })
    ),
    on(actionMap.select, (state, payload) => ({
      ...state,
      selectedId: payload.id,
    })),
    on(actionMap.deselect, state => ({
      ...state,
      selectedId: null,
    }))
  )
}
