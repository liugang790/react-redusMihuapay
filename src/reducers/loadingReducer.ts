import { IEmptyAction } from './../actions/types'

const defaultValue: number = 0

export default (loading: number = defaultValue, action: IEmptyAction): number => {
  switch (action.type) {
  case 'LOADING_START':
    loading += 1
    break
  case 'LOADING_END':
    loading -= 1
    break
  default:
    break
  }
  return loading
}
