import ActionTypes from '../actions/types'
import { ISalesman } from '../store'
import { IPayloadAction } from './../actions/types'

const defaultValue: ISalesman[] = []

export default (
  salesmen: ISalesman[] = defaultValue,
  action: IPayloadAction<ISalesman[]>,
): ISalesman[] => {
  switch (action.type) {
  case ActionTypes.RESET_SALESMEN:
    return action.payload
  default:
    break
  }
  return salesmen
}
