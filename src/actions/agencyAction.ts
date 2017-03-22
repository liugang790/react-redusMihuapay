import { IAgency } from '../store'
import ActionTypes, { IPayloadAction } from './types'

export interface IFetchAgenciesPayload {
  subordinates?: boolean,
}

export type IFetchAgenciesResult = IPayloadAction<IFetchAgenciesPayload>

export type IFetchAgenciesAction = (payload?: IFetchAgenciesPayload) => IFetchAgenciesResult

export const fetchAgencies = (payload: IFetchAgenciesPayload): IFetchAgenciesResult => ({
  payload,
  type: ActionTypes.FETCH_AGENCIES,
})

export type IResetAgenciePayload = IAgency

export type IResetAgencieResult = IPayloadAction<IAgency>

export type IResetAgencieAction = (payload: IResetAgenciePayload) => IResetAgencieResult

export const resetAgencie = (payload: IResetAgenciePayload): IResetAgencieResult => ({
  payload,
  type: ActionTypes.RESET_AGENCIES,
})
