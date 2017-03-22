import ActionTypes from '../actions/types'
import { IAgency } from '../store'
import { IPayloadAction } from './../actions/types'

const defaultValue: IAgency[] = []

export default (
  agencies: IAgency[] = defaultValue,
  action: IPayloadAction<IAgency[]>,
): IAgency[] => {
  switch (action.type) {
  case ActionTypes.RESET_AGENCIES:
    return action.payload
  default:
    break
  }
  return agencies
}
