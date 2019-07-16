export interface List<T> {
  rows: T[]
  pagination: {
    total: number
    pages: number
    page: number
    limit: number
    offset: number
    filter: any
    sort: [string[]]
    term?: string
  }
}
