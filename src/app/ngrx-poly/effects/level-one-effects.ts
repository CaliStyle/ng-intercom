import { Injectable, Injector } from '@angular/core'
import { Actions, createEffect } from '@ngrx/effects'
import { filter, map, mergeMap } from 'rxjs/operators'
import { createPolyAction } from '../actions/action-creator'
import { PolyAction } from '../actions/action'
import { Op } from '../actions/operations'
import { NgrxPolyHelperService } from '../config/helper'

const ofOp = (op: Op) => filter((action: PolyAction) => action.operation == op)

@Injectable()
export class LevelOneEffects {
  findAll$ = createEffect(() =>
    this.actions$.pipe(
      ofOp(Op.FIND_ALL),
      mergeMap(action => {
        const service = this.injector.get(this.helperService.config.dataServices[action.entity])
        return service
          .findAll(action.payload)
          .pipe(map(response => createPolyAction<any>(action.feature, action.entity, Op.FIND_ALL_SUCCESS)(response)))
      })
    )
  )

  constructor(private actions$: Actions<PolyAction>, private helperService: NgrxPolyHelperService, private injector: Injector) {}
}
