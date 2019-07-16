import { InjectionToken, Type } from '@angular/core'
import { Getters } from './getters'
import { List } from '../types/list'
import { LevelOneDataServiceBase } from '../data/level-one-data-service'

export const POLY_CONFIG = new InjectionToken<PolyConfig<any, any>>('POLY_CONFIG')

export const defaultPolyConfig = {
  initialState: {},
}

export interface PolyConfig<T, U> {
  initialState?: PolyState<any>
  getters?: Getters<T, U>
  selection?: 'router' | 'manual'
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
