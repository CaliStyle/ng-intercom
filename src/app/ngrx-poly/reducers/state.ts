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
