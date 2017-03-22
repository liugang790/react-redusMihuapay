import ActionTypes, { IEmptyAction, IPayloadAction } from './types'
import { IDashboardData } from '../store'



export interface IFetchAgencyPerformanceDataActionParams {
  subordinates?: boolean,
}

export const getDashboard = (payload: IFetchAgencyPerformanceDataActionParams):
  IPayloadAction<IFetchAgencyPerformanceDataActionParams> => ({
    payload,
    type: ActionTypes.Fetch_get_dashborad
  })

export const receiveDashboard = (payload: IDashboardData):
  IPayloadAction<IDashboardData> => ({
    payload,
    type: ActionTypes.Recive_get_dashborad,
  })


export const fetchWXIndustry = (): IEmptyAction => ({
  type: ActionTypes.Fetch_WX_Industry,
})

export const reciveWXIndustry = (industrys: object): IPayloadAction<{}> => ({
  payload: {
    industrys:industrys,
  },
  type: ActionTypes.Recive_WX_INDUSTRY,
})

export const fetchAllSelect = () => ({
  type:  ActionTypes.Fetch_All_Select,
})

export const reciveAllSelect = (industrys: object): IPayloadAction<{}> => ({
  payload: {
    industrys: industrys,
  },
  type: ActionTypes.Recive_All_Select,
})
