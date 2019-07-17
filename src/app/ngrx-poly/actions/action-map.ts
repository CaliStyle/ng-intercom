import { ActionCreator, FunctionWithParametersType, TypedAction } from '@ngrx/store/src/models'
import { List } from '../types/list'
import { Query } from '../types/query'

type ErrorAction = FunctionWithParametersType<
  [any],
  {
    error: any
  } & TypedAction<string>
> &
  TypedAction<string>

type QueryActionD1 = FunctionWithParametersType<
  [Query],
  {
    query: Query
  } & TypedAction<string>
> &
  TypedAction<string>

type QueryActionD2<T, Tkey extends string> = FunctionWithParametersType<
  [T, Query],
  { [x in Tkey]: T } & {
    query: Query
  } & TypedAction<string>
> &
  TypedAction<string>

type ActionWithIdD1 = FunctionWithParametersType<
  [string | number],
  {
    id: string | number
  } & TypedAction<string>
> &
  TypedAction<string>

type ActionWithIdD2<T, Tkey extends string> = FunctionWithParametersType<[T, string | number], any> & TypedAction<string>

type D1ActionWithEntity<T, Tkey extends string> = FunctionWithParametersType<[T], { [P in Tkey]: T } & TypedAction<string>> &
  TypedAction<string>

type D2Union<T, U, Tkey extends string, Ukey extends string> = { [x in Tkey | Ukey]: T | U }
type D2ActionWithEntity<T, U, Tkey extends string, Ukey extends string> = FunctionWithParametersType<
  [T, U],
  { [x in Tkey]: T } & { [x in Ukey]: U } & TypedAction<string>
> &
  TypedAction<string>

export interface ActionMapD1<T, U extends string> {
  findAll: QueryActionD1
  findAllSuccess: ActionCreator<string, (props: List<T>) => List<T> & TypedAction<string>>
  findAllFailure: ErrorAction

  search: QueryActionD1
  searchSuccess: ActionCreator<string, (props: List<T>) => List<T> & TypedAction<string>>
  searchFailure: ErrorAction

  findOne: ActionWithIdD1
  findOneSuccess: D1ActionWithEntity<T, U>
  findOneFailure: ErrorAction

  create: D1ActionWithEntity<T, U>
  createSuccess: D1ActionWithEntity<T, U>
  createFailure: ErrorAction

  update: D1ActionWithEntity<T, U>
  updateSuccess: D1ActionWithEntity<T, U>
  updateFailure: ErrorAction

  delete: ActionWithIdD1
  deleteSuccess: D1ActionWithEntity<T, U>
  deleteFailure: ErrorAction

  select: ActionWithIdD1
  deselect: ActionCreator<string, FunctionWithParametersType<any[], object>>

  _entity: U
}

export interface ActionMapD2<T, U, Tkey extends string, Ukey extends string> {
  findAll: QueryActionD2<T, Tkey>
  findAllSuccess: ActionCreator<string, (props: List<U>) => List<U> & TypedAction<string>>
  findAllFailure: ErrorAction

  search: QueryActionD2<T, Tkey>
  searchSuccess: ActionCreator<string, (props: List<U>) => List<U> & TypedAction<string>>
  searchFailure: ErrorAction

  findOne: ActionWithIdD2<T, Tkey>
  findOneSuccess: D1ActionWithEntity<U, Ukey>
  findOneFailure: ErrorAction

  create: D2ActionWithEntity<T, U, Tkey, Ukey>
  createSuccess: D1ActionWithEntity<U, Ukey>
  createFailure: ErrorAction

  update: D2ActionWithEntity<T, U, Tkey, Ukey>
  updateSuccess: D1ActionWithEntity<U, Ukey>
  updateFailure: ErrorAction

  delete: ActionWithIdD2<T, Tkey>
  deleteSuccess: D1ActionWithEntity<U, Ukey>
  deleteFailure: ErrorAction

  select: ActionWithIdD1
  deselect: ActionCreator<string, FunctionWithParametersType<any[], object>>

  _parent: Tkey
  _entity: Ukey
}
