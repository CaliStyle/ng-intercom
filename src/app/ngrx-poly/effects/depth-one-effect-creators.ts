import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators'
import { ActionMapD1 } from '../actions/action-map'
import { DepthOneDataServiceBase } from './depth-one-data-service'
import { EffectsMap } from './effects-map'
import { Action } from '@ngrx/store'

export function depthOneEffectCreators<T, U extends string>(
  actionMap: ActionMapD1<T, U>,
  actions$: Actions,
  dataService: DepthOneDataServiceBase<T>
): EffectsMap {
  return {
    findAll: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.findAll),
        mergeMap(action =>
          dataService.findAll(action.query).pipe(
            map(data => actionMap.findAllSuccess(data)),
            catchError(error => of(actionMap.findAllFailure(error)))
          )
        )
      )
    ),
    search: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.search),
        mergeMap(action =>
          dataService.search(action.query).pipe(
            map(data => actionMap.searchSuccess(data)),
            catchError(error => of(actionMap.searchFailure(error)))
          )
        )
      )
    ),
    findOne: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.findOne),
        mergeMap(action =>
          dataService.findOne(action.id).pipe(
            map(data => actionMap.findOneSuccess(data)),
            catchError(error => of(actionMap.findOneFailure(error)))
          )
        )
      )
    ),

    create:
      // createEffect(() =>
      actions$.pipe(
        ofType(actionMap.create),
        switchMap(action => {
          const entity = (action[actionMap._entity] as unknown) as T
          return dataService.create(entity).pipe(
            map(data => actionMap.createSuccess(data as T)),
            catchError(error => of(actionMap.createFailure(error)))
          )
        })
        // )
      ),

    update: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.update),
        mergeMap(action => {
          const entity = (action[actionMap._entity] as unknown) as T
          return dataService.update(entity).pipe(
            map(data => actionMap.updateSuccess(data)),
            catchError(error => of(actionMap.updateFailure(error)))
          )
        })
      )
    ),

    delete: createEffect(() =>
      actions$.pipe(
        ofType(actionMap.delete),
        mergeMap(action =>
          dataService.delete(action.id).pipe(
            map(data => actionMap.deleteSuccess(data)),
            catchError(error => of(actionMap.deleteFailure(error)))
          )
        )
      )
    ),
  }
}
