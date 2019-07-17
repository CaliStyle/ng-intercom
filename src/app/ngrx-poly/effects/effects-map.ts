import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ActionMapD1 } from '../actions/action-map'
import { DepthOneDataServiceBase } from './depth-one-data-service'
import { catchError, mergeMap, map } from 'rxjs/operators'
import { of, Observable } from 'rxjs'
import { Action } from '@ngrx/store'

export interface EffectsMap {
  findAll: Observable<Action>
  search: Observable<Action>
  findOne: Observable<Action>
  create: Observable<Action>
  update: Observable<Action>
  delete: Observable<Action>
}
