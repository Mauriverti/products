import { Dispatch, SetStateAction } from 'react'

export default class FieldInteractor {
  static toState<S>(setState: Dispatch<SetStateAction<S>>, field: keyof S, value: unknown) {
    setState((old) => ({
      ...old,
      [field]: value,
    }))
  }
}
