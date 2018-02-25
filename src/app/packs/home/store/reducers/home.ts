import { actions } from '../actions'

export interface State {
  title: string | null,
  trails: {
    app?: string
    libs?: {}
    node?: string
    trailpacks?: any[]
  }
  loading: boolean
  error: string | null
}

export const initialState: State = {
  title: null,
  trails: {},
  loading: false,
  error: null
}


export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.HELLO_WORLD: {
      return Object.assign({}, state, {title: action.payload })
    }
    case actions.ActionTypes.TRAILS: {
      return Object.assign({}, state, {loading: true })
    }
    case actions.ActionTypes.TRAILS_SUCCESS: {
      return Object.assign({}, state, {loading: false, trails: action.payload })
    }
    case actions.ActionTypes.TRAILS_FAILED: {
      return Object.assign({}, state, {loading: false, error: action.payload })
    }
    default: {
      return state
    }
  }
}
