import { Injectable } from '@angular/core'
import { ActionReducerMap, createFeatureSelector, createSelector, MemoizedSelector, select, Store } from '@ngrx/store'
import { DefaultProjectorFn } from '@ngrx/store/src/selector'
import { Observable } from 'rxjs'
import { levelOneCommonActions } from '../actions/common-actions'
import { PolyState } from '../config/config'
import { NgrxPolyHelperService } from '../config/helper'
import { LevelOneDataServiceBase } from '../data/level-one-data-service'
import { selectors } from '../reducers/selectors'
import { Pagination } from '../types/pagination'

@Injectable()
export class LevelOneCollectionServiceBase<T> {
  private featureSelector = createFeatureSelector(this.helperService.featureName)
  private entitySelector = createSelector(
    this.featureSelector,
    (state: { [key: string]: PolyState<T> }) => state[this.entityName]
  )

  /**
   * selectors.getSelected can be replaced with any NgRx selector to
   * get an ID out of the router state. This replacement should happen in the constructor.
   */
  selectors = selectors<T>()

  getEntities = createSelector(
    this.entitySelector,
    this.selectors.getAll
  )

  getPagination = createSelector(
    this.entitySelector,
    this.selectors.getPagination
  )

  getSelected = createSelector(
    this.entitySelector,
    this.selectors.getSelected
  )

  getLoading = createSelector(
    this.entitySelector,
    this.selectors.getLoading
  )

  entities$: Observable<T[]> = this.store.pipe(select(this.getEntities))
  pagination$: Observable<Pagination> = this.store.pipe(select(this.getPagination))
  selected$: Observable<T> = this.store.pipe(select(this.getSelected))
  loading$: Observable<boolean> = this.store.pipe(select(this.getLoading))

  private actionCreators = levelOneCommonActions<T>(this.helperService.featureName, this.entityName)

  constructor(public entityName: string, public helperService: NgrxPolyHelperService, public store: Store<any>) {}

  findAll(query: any) {
    this.store.dispatch(this.actionCreators.findAll(query))
  }

  findOne(id: string | number) {
    this.store.dispatch(this.actionCreators.findOne(id))
  }

  create(entity: T) {
    this.store.dispatch(this.actionCreators.create(entity))
  }

  update(entity: T) {
    this.store.dispatch(this.actionCreators.update(entity))
  }

  delete(id: string | number) {
    this.store.dispatch(this.actionCreators.delete(id))
  }

  select(id: string | number) {
    this.store.dispatch(this.actionCreators.select(id))
  }

  deselect() {
    this.store.dispatch(this.actionCreators.deselect(null))
  }
}
