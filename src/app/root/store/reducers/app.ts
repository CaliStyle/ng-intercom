import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { app } from '../actions'

export interface App {
  id: string
  name: string
  config: Object
}

export interface State extends EntityState<App> {
  title: string | null
  ready: boolean
}

export const adapter: EntityAdapter<App> = createEntityAdapter<App>()

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  title: null,
  ready: false,
})

export function reducer(state = initialState, action: app.Actions): State {
  switch (action.type) {
    case app.ActionTypes.SET_TITLE: {
      return Object.assign({}, state, { title: action.payload.title })
    }

    case app.ActionTypes.LOAD_PACKS_COMPLETE: {
      return Object.assign({}, state, { ready: action.payload })
    }

    default: {
      return state
    }
  }
}

export const getTitle = (state: State) => state.title
