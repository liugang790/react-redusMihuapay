import { ISalesman } from '../store'
import ActionTypes, { IEmptyAction, IPayloadAction } from './types'

export const fetchSalesmenAction = (): IEmptyAction => ({
  type: ActionTypes.FETCH_SALESMEN,
})

export const resetSalesmenAction = (payload: ISalesman): IPayloadAction<ISalesman> => ({
  payload,
  type: ActionTypes.RESET_SALESMEN,
})
