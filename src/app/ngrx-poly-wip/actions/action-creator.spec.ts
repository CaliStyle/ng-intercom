import { createPolyAction, _constructActionTypeFromParameters } from './action-creator'
import { Op } from './operations'

describe('Action Creators', () => {
  describe('_constructActionTypeFromParameters', () => {
    it('should create a root action when no feature is passed', () => {
      expect(_constructActionTypeFromParameters(null, 'book', Op.FIND_ALL)).toEqual('ngrx-poly/book/find-all')
    })

    it('should create a feature module action when a feature is passed', () => {
      expect(_constructActionTypeFromParameters('books', 'book', Op.FIND_ALL)).toEqual('ngrx-poly/books/book/find-all')
    })
  })

  describe('createPolyAction', () => {
    it('should create an action creator', () => {
      expect(createPolyAction(null, 'book', Op.FIND_ALL)).toBeInstanceOf(Function)
    })

    it('should create a simple action', () => {
      expect(createPolyAction(null, 'book', Op.FIND_ALL)({})).toEqual({
        type: 'ngrx-poly/book/find-all',
        feature: null,
        entity: 'book',
        operation: 'find-all',
        payload: {},
      })
    })

    it('should create an action with payload', () => {
      expect(createPolyAction<{ query: any }>(null, 'book', Op.FIND_ALL)({ query: {} })).toEqual({
        type: 'ngrx-poly/book/find-all',
        feature: null,
        entity: 'book',
        operation: 'find-all',
        payload: { query: {} },
      })
    })

    it('should create a feature action', () => {
      expect(createPolyAction<{ query: any }>('books', 'book', Op.FIND_ALL)({ query: {} })).toEqual({
        type: 'ngrx-poly/books/book/find-all',
        entity: 'book',
        feature: 'books',
        operation: 'find-all',
        payload: { query: {} },
      })
    })
  })
})
