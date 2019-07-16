import { ActionReducer } from '@ngrx/store'
import { PolyAction } from '../actions/action'
import { Op } from '../actions/operations'
import { PolyState } from '../config/config'
import { Pagination } from '../types/pagination'
import { reduceEntityArray } from '../utils/reduce-entity-array'
import { List } from '../types/list'
import { removeFromObj, removeFromArray } from './utils'

export interface On<S> {
  reducer: ActionReducer<S, PolyAction['payload']>
  types: string[]
}

export function createPolyReducer<T extends object>(
  initialState: PolyState<T>,
  feature: string,
  entity: string,
  keyGetter: (obj: T) => string,
  ...ons: On<PolyState<T>>[]
) {
  const actionPrefix = 'ngrx-poly/' + (feature ? feature + '/' + entity + '/' : entity + '/')
  return createReducer(
    initialState,
    polyOn(actionPrefix, Op.FIND_ALL, Op.SEARCH, (state, payload: { [key: string]: any }) => ({
      ...state,
      loaded: false,
      loading: true,
      filter: payload.filter || state.filter,
      sort: payload.sort || state.sort,
      includes: payload.includes || state.includes,
    })),
    polyOn(actionPrefix, Op.FIND_ONE, Op.CREATE, Op.UPDATE, Op.DELETE, (state, payload: T) => ({
      ...state,
      loaded: false,
      loading: true,
    })),
    polyOn(actionPrefix, Op.FIND_ALL_SUCCESS, Op.SEARCH_SUCCESS, (state, payload: List<T>) => {
      const rows: T[] = payload.rows
      const pagination = payload.pagination

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
    polyOn(actionPrefix, Op.FIND_ONE_SUCCESS, Op.CREATE_SUCCESS, Op.UPDATE_SUCCESS, (state, payload: T) => {
      const selectedId = keyGetter(payload)

      const entities = { ...state.entities, [keyGetter(payload)]: payload }
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
    polyOn(actionPrefix, Op.DELETE_SUCCESS, (state, payload: T) => {
      const idToRemove = keyGetter(payload)

      const entities = removeFromObj(state.entities, idToRemove)
      const ids = removeFromArray(state.ids, idToRemove)

      let mergeObj: Partial<PolyState<T>> = {}
      if (state.selectedId == idToRemove) {
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
    polyOn(
      actionPrefix,
      Op.FIND_ALL_FAILURE,
      Op.SEARCH_FAILURE,
      Op.FIND_ONE_FAILURE,
      Op.CREATE_FAILURE,
      Op.UPDATE_FAILURE,
      Op.DELETE_FAILURE,
      (state, payload: any) => ({
        ...state,
        error: payload,
        loaded: true,
        loading: false,
      })
    ),
    polyOn(actionPrefix, Op.SELECT, (state, payload: string | number) => ({
      ...state,
      selectedId: payload,
    })),
    polyOn(actionPrefix, Op.DESELECT, (state, payload: string | number) => ({
      ...state,
      selectedId: null,
    })),
    ...ons
  )
}

export function polyOn<S>(actionPrefix: string, ...args: (Op | ActionReducer<S, PolyAction['payload']>)[]): On<S> {
  const reducer = args.pop() as ActionReducer<S, PolyAction>
  const types = args.reduce((result, op) => [...result, actionPrefix + (op as Op)], [] as string[])
  return { reducer, types }
}

export function createReducer<S>(initialState: S, ...ons: On<S>[]): ActionReducer<S> {
  const map = new Map<string, ActionReducer<S>>()
  for (let on of ons) {
    for (let type of on.types) {
      map.set(type, on.reducer)
    }
  }

  return function(state: S = initialState, action: PolyAction): S {
    const reducer = map.get(action.type)
    return reducer ? reducer(state, action.payload) : state
  }
}
