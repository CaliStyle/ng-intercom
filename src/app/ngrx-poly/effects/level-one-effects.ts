import { Injectable, Injector } from '@angular/core'
import { Actions, createEffect } from '@ngrx/effects'
import { filter, map, mergeMap, catchError } from 'rxjs/operators'
import { createPolyAction } from '../actions/action-creator'
import { PolyAction } from '../actions/action'
import { Op } from '../actions/operations'
import { NgrxPolyHelperService } from '../config/helper'
import { iif, EMPTY, of } from 'rxjs'
import { Action } from 'rxjs/internal/scheduler/Action'

const ofOp = (op: Op) => filter((action: PolyAction) => action.operation == op)

@Injectable()
export class LevelOneEffects {
  findAll$ =
  // createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.FIND_ALL),
      mergeMap(action => {
        console.log(this.helperService.config)
        if (this.helperService.config.dataServices[action.entity]) {
          const service = this.injector.get(this.helperService.config.dataServices[action.entity])
          return service.findAll(action.payload).pipe(
            map(response => createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_SUCCESS)(response)),
            catchError(error => of(createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_FAILURE)(error)))
          )
        } else {
          return of(createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_FAILURE)(null))
        }
      })
    )
  // )

  constructor(private actions$: Actions<PolyAction>, private helperService: NgrxPolyHelperService, private injector: Injector) {}
}
