import { InjectionToken, Type } from '@angular/core'
import { Getters, getters } from './getters'
import { List } from '../../ngrx-poly/types/list'
import { LevelOneDataServiceBase } from '../data/level-one-data-service'

export const POLY_CONFIG = new InjectionToken<PolyConfig>('POLY_CONFIG')

export const defaultInitialState: PolyState<any> = {
  entities: {},
  ids: [],

  loaded: true,
  loading: false,

  selectedId: null,

  total: 0,
  offset: 0,
  limit: 0,
  page: 0,
  pages: 0,
  filter: [],
  sort: [[]],
  includes: null,
  error: null,
}

export const defaultPolyConfig: PolyConfig = {
  initialState: defaultInitialState,
  getters: getters(),
  dataServices: {},
}

export interface PolyConfig {
  initialState?: PolyState<any>
  getters?: Getters<any, any>
  dataServices?: {
    [key: string]: Type<LevelOneDataServiceBase<any, any>>
  }
}

export interface PolyState<T> {
  entities: { [key: string]: T }
  ids: (string | number)[]

  loaded: boolean
  loading: boolean

  selectedId: string | number | null

  total: number
  offset: number
  limit: number
  page: number
  pages: number
  filter: any
  sort: [string[]]
  includes: string[] | null
  error: string | null
}
