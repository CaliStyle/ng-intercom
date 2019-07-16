import { KeyMap } from '../types/keymap'

export function removeFromArray<T>(array: T[], element: T): T[] {
  while (array.indexOf(element) > -1) {
    array.splice(array.indexOf(element), 1)
  }
  return array
}

export function removeFromObj<T>(obj: KeyMap<T>, key: string | number): KeyMap<T> {
  const clone = { ...obj }
  delete clone[key]
  return clone
}
