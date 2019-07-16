import { reduceEntityArray } from './reduce-entity-array'

describe('reduceEntityArray', () => {
  const genericIdGetter = entity => entity.id

  it('should return empty sets when input is empty', () => {
    expect(reduceEntityArray([], genericIdGetter)).toEqual({ uuids: [], ids: [], entities: {} })
  })

  it('should return one object and array with one index when passed one object', () => {
    expect(reduceEntityArray([{ id: 'identifier' }], genericIdGetter)).toEqual({
      uuids: ['identifier'],
      ids: ['identifier'],
      entities: { identifier: { id: 'identifier' } },
    })
  })

  it('should concatenate initial values', () => {
    expect(reduceEntityArray([{ id: 'identifier' }], genericIdGetter, { id2: { id: 'id2' } })).toEqual({
      uuids: ['id2', 'identifier'],
      ids: ['id2', 'identifier'],
      entities: { id2: { id: 'id2' }, identifier: { id: 'identifier' } },
    })
  })

  it('should throw if keyGetter references an undefined property', () => {
    expect(() => reduceEntityArray([{ otherKey: 'identifier' }], genericIdGetter)).toThrow(
      'Attempted to use undefined as key value in store. Review the second argument passed to reduceEntityArray.'
    )
  })

  it('should throw if passed an array of strings', () => {
    expect(() => reduceEntityArray(['str', 'test'], genericIdGetter)).toThrow(
      'Attempted to pass a non-object array into reduceEntityArray. Expected: object. Actual: string'
    )
  })

  it('should throw if passed an array of numbers', () => {
    expect(() => reduceEntityArray([1, 2, 3], genericIdGetter)).toThrow(
      'Attempted to pass a non-object array into reduceEntityArray. Expected: object. Actual: number'
    )
  })

  it('should throw if passed an array of arrays', () => {
    expect(() => reduceEntityArray([[{ id: 3 }, { id: 5 }], [{ id: 12 }]], genericIdGetter)).toThrow(
      'Attempted to pass a non-object array into reduceEntityArray. Expected: object. Actual: array'
    )
  })
})
