import { createSelector } from '@ngrx/store'
import { PolyState } from '../config/config'
import { Pagination } from '../types/pagination'

export function selectors<T>() {
  const getLoaded = (state: PolyState<T>) => state.loaded
  const getLoading = (state: PolyState<T>) => state.loading
  const getIds = (state: PolyState<T>) => state.ids
  const getEntities = (state: PolyState<T>) => state.entities
  const getSelectedId = (state: PolyState<T>) => state.selectedId

  return {
    getLoaded,
    getLoading,
    getIds,
    getEntities,
    getSelectedId,

    getSelected: createSelector(
      getEntities,
      getSelectedId,
      (entities, selectedId) => entities[selectedId]
    ),
    /** Get All Users */
    getAll: createSelector(
      getEntities,
      getIds,
      (entities, uuids) => uuids.map(id => entities[id])
    ),

    /** Pagination */
    getPagination: (state): Pagination => ({
      total: state.total,
      limit: state.limit,
      offset: state.offset,
      page: state.page,
      pages: state.pages,
      sort: state.sort,
      includes: state.includes,
      filter: state.filter,
    }),
  }
}
