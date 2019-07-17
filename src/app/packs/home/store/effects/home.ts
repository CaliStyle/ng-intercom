import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable, of, defer } from 'rxjs'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'

import { NgEngineService } from 'ng-engine'
import { HomeDataService } from '../data/home'
import { EffectCreators } from '../../../../ngrx-poly'
import { homeActions } from '../actions'

@Injectable()
export class HomeEffects {
  effects = EffectCreators.createDepthOneEffects(homeActions, this.actions$, this.homeService)

  findAll$ = this.effects.findAll
  findOne$ = this.effects.findOne

  constructor(private homeService: HomeDataService, private actions$: Actions) {}
}
