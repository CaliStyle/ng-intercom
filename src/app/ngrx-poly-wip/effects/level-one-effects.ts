import { Injectable, Injector } from '@angular/core'
import { Actions, createEffect } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, filter, map, mergeMap } from 'rxjs/operators'
import { PolyAction } from '../actions/action'
import { createPolyAction } from '../actions/action-creator'
import { Op } from '../actions/operations'
import { NgrxPolyHelperService } from '../config/helper'
import { LevelOneDataServiceBase } from '../data/level-one-data-service'

const ofOp = (op: Op) => filter((action: PolyAction) => action.operation == op)

@Injectable()
export class LevelOneEffects {
  findAll$ = createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.FIND_ALL),
      mergeMap(action => {
        const service = this.getDataService(action.feature, action.entity, 'findAll')
        if (service) {
          return service.findAll(action.payload).pipe(
            map(response => createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_SUCCESS)(response)),
            catchError(error => of(createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_FAILURE)(error)))
          )
        }

        return of(
          createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_FAILURE)({
            message: 'No findAll method found on data service.',
          })
        )
      })
    )
  )

  findOne$ = createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.FIND_ONE),
      mergeMap(action => {
        const service = this.getDataService(action.feature, action.entity, 'findOne')
        if (service) {
          return service.findOne(action.payload).pipe(
            map(response => createPolyAction<any>(action.feature, action.entity, Op.FIND_ONE_SUCCESS)(response)),
            catchError(error => of(createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_FAILURE)(error)))
          )
        } else {
          return of(
            createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_FAILURE)({
              message: 'No findOne method found on data service.',
            })
          )
        }
      })
    )
  )

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.CREATE),
      mergeMap(action => {
        const service = this.getDataService(action.feature, action.entity, 'create')
        if (service) {
          return service.create(action.payload).pipe(
            map(response => createPolyAction<any>(action.feature, action.entity, Op.CREATE_SUCCESS)(response)),
            catchError(error => of(createPolyAction<any>(action.feature, action.entity, Op.CREATE_FAILURE)(error)))
          )
        } else {
          return of(
            createPolyAction<any>(action.feature, action.entity, Op.CREATE_FAILURE)({
              message: 'No create method found on data service.',
            })
          )
        }
      })
    )
  )

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.UPDATE),
      mergeMap(action => {
        const service = this.getDataService(action.feature, action.entity, 'update')
        if (service) {
          return service.update(action.payload).pipe(
            map(response => createPolyAction<any>(action.feature, action.entity, Op.UPDATE_SUCCESS)(response)),
            catchError(error => of(createPolyAction<any>(action.feature, action.entity, Op.UPDATE_FAILURE)(error)))
          )
        } else {
          return of(
            createPolyAction<any>(action.feature, action.entity, Op.UPDATE_FAILURE)({
              message: 'No update method found on data service.',
            })
          )
        }
      })
    )
  )

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.DELETE),
      mergeMap(action => {
        const service = this.getDataService(action.feature, action.entity, 'delete')
        if (service) {
          return service.delete(action.payload).pipe(
            map(response => createPolyAction<any>(action.feature, action.entity, Op.DELETE_SUCCESS)(response)),
            catchError(error => of(createPolyAction<any>(action.feature, action.entity, Op.DELETE_FAILURE)(error)))
          )
        } else {
          return of(
            createPolyAction<any>(action.feature, action.entity, Op.DELETE_FAILURE)({
              message: 'No delete method found on data service.',
            })
          )
        }
      })
    )
  )

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.SEARCH),
      mergeMap(action => {
        const service = this.getDataService(action.feature, action.entity, 'search')
        if (service) {
          return service.search(action.payload).pipe(
            map(response => createPolyAction<any>(action.feature, action.entity, Op.SEARCH_SUCCESS)(response)),
            catchError(error => of(createPolyAction<any>(action.feature, action.entity, Op.SEARCH_FAILURE)(error)))
          )
        } else {
          return of(
            createPolyAction<any>(action.feature, action.entity, Op.SEARCH_FAILURE)({
              message: 'No search method found on data service.',
            })
          )
        }
      })
    )
  )

  private getDataService(feature: string, entity: string, method: string) {
    const clazz = this.helperService.getDataService(feature, entity)
    if (clazz) {
      const service = this.injector.get(clazz)
      if (service instanceof LevelOneDataServiceBase && service[method]) {
        return service
      }
    }
    return false
  }

  constructor(private actions$: Actions<PolyAction>, private helperService: NgrxPolyHelperService, private injector: Injector) {}
}
