export function reduceEntityArray<T extends object>(
  entities: T[],
  keyGetter: (entity: T) => string | number | symbol,
  initialItems: { [key: string]: T } = {}
) {
  let initialUuids = []
  if (initialItems) {
    initialUuids = Object.keys(initialItems)
  }

  const newUuids = [
    ...initialUuids,
    ...entities.map(entity => {
      if (entity instanceof Object && !Array.isArray(entity)) {
        let key = keyGetter(entity)
        if (key == undefined) {
          throw new Error('Attempted to use undefined as key value in store. Review the second argument passed to reduceEntityArray.')
        }
        return key
      } else {
        throw new Error(
          'Attempted to pass a non-object array into reduceEntityArray. Expected: object. Actual: ' +
            (Array.isArray(entity) ? 'array' : typeof entity)
        )
      }
    }),
  ]

  const newEntities = entities.reduce(
    (entities: { [id: string]: T }, entity: T) =>
      Object.assign({}, entities, {
        [keyGetter(entity)]: entity,
      }),
    initialItems
  )

  return { uuids: newUuids, ids: newUuids, entities: newEntities }
}
