import { IDashboardData } from '../store'
import ActionTypes, { IPayloadAction } from './types'

export interface IFetchAgencyPerformanceDataActionParams {
  subordinates?: boolean,
}

export const fetchAgencyPerformanceDataAction = (payload: IFetchAgencyPerformanceDataActionParams):
IPayloadAction<IFetchAgencyPerformanceDataActionParams> => ({
  payload,
  type: ActionTypes.FETCH_AGENCY_PERFORMANCE_DATA
})

export const receiveAgencyPerformanceDataAction = (payload: IDashboardData):
IPayloadAction<IDashboardData> => ({
  payload,
  type: ActionTypes.RECEIVE_AGENCY_PERFORMANCE_DATA,
})
