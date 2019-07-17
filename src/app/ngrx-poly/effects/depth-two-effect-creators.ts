import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { ActionMapD2 } from '../actions/action-map'
import { DepthTwoDataServiceBase } from './depth-two-data-service'
import { EffectsMap } from './effects-map'

export function depthTwoEffectCreators<T, U, Tkey extends string, Ukey extends string>(
  actions$: Actions,
  actionMap: ActionMapD2<T, U, Tkey, Ukey>,
  dataService: DepthTwoDataServiceBase<T, U>
): EffectsMap {
  return {
    findAll: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.findAll),
        mergeMap(action => {
          const parent = (action[actionMap._parent] as unknown) as T
          return dataService.findAll(parent, action.query).pipe(
            map(data => actionMap.findAllSuccess(data)),
            catchError(error => of(actionMap.findAllFailure(error)))
          )
        })
      )
    ),

    search: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.search),
        mergeMap(action => {
          const parent = (action[actionMap._parent] as unknown) as T
          return dataService.search(parent, action.query).pipe(
            map(data => actionMap.searchSuccess(data)),
            catchError(error => of(actionMap.searchFailure(error)))
          )
        })
      )
    ),

    findOne: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.findOne),
        mergeMap(action => {
          const parent = (action[actionMap._parent] as unknown) as T
          return dataService.findOne(parent, action.id).pipe(
            map(data => actionMap.findOneSuccess(data)),
            catchError(error => of(actionMap.findOneFailure(error)))
          )
        })
      )
    ),

    create: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.create),
        mergeMap(action => {
          const parent = (action[actionMap._parent] as unknown) as T
          const entity = (action[actionMap._entity] as unknown) as U
          return dataService.create(parent, entity).pipe(
            map(data => actionMap.createSuccess(data)),
            catchError(error => of(actionMap.createFailure(error)))
          )
        })
      )
    ),

    update: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.update),
        mergeMap(action => {
          const parent = (action[actionMap._parent] as unknown) as T
          const entity = (action[actionMap._entity] as unknown) as U
          return dataService.update(parent, entity).pipe(
            map(data => actionMap.updateSuccess(data)),
            catchError(error => of(actionMap.updateFailure(error)))
          )
        })
      )
    ),
    delete: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.delete),
        mergeMap(action => {
          const parent = (action[actionMap._parent] as unknown) as T
          return dataService.delete(parent, action.id).pipe(
            map(data => actionMap.deleteSuccess(data)),
            catchError(error => of(actionMap.deleteFailure(error)))
          )
        })
      )
    ),
  }
}
