import { InjectionToken } from '@angular/core'
import { List } from '../types/list'

export const GETTERS = new InjectionToken<Getters<any, any>>('GETTERS')

const defaultGetters = {
  getRows: (response: List<any>) => response.rows,
  getTotal: (response: List<any>) => response.pagination.total,
  getOffset: (response: List<any>) => response.pagination.offset,
  getLimit: (response: List<any>) => response.pagination.limit,
  getPage: (response: List<any>) => response.pagination.page,
  getPages: (response: List<any>) => response.pagination.pages,
  getFilter: (response: List<any>) => response.pagination.filter,
  getSort: (response: List<any>) => response.pagination.sort,
}

export function getters<T>(): Getters<T, List<T>>
export function getters<T, U>(g: Getters<T, U>): Getters<T, U>
export function getters<T, U>(g: Getters<T, U> | Getters<T, List<T>> = {}): Getters<T, U> | Getters<T, List<T>> {
  return {
    ...(defaultGetters as any),
    ...g,
  }
}

export interface Getters<T, U = List<T>> {
  getRows?: (response: U) => T[]
  getTotal?: (response: U) => number
  getOffset?: (response: U) => number
  getLimit?: (response: U) => number
  getPage?: (response: U) => number
  getPages?: (response: U) => number
  getFilter?: (response: U) => any
  getSort?: (response: U) => [string[]]
}
