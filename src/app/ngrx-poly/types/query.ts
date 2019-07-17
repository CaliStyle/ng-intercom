export interface Query {
  limit?: number
  offset?: number
  filter?: any
  sort?: [string[]]
  term?: string
}
