export interface Pagination {
  total: number
  offset: number
  limit: number
  page: number
  pages: number
  filter: any
  sort: [string[]]
  includes: string[] | null
}
