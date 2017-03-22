export interface IAction<M, P> {
  payload?: P
  meta?: M
  type: string
}

export interface IEmptyAction extends IAction<{}, {}> {
  type: string
}

export interface IMetaAction<M> extends IAction<{}, M> {
  meta: M
  type: string
}

export interface IPayloadAction<P> extends IAction<P, {}> {
  payload: P
  type: string
}

export default {
  FETCH_AGENCIES: 'FETCH_AGENCIES',
  FETCH_AGENCY_PERFORMANCE_DATA: 'FETCH_AGENCY_ PERFORMANCE_DATA',
  FETCH_SALESMEN: 'FETCH_SALESMEN',
  Fetch_All_Select: 'FETCH_ALL_SELECT',
  Fetch_WX_Industry: 'FETCH_WX_INDUSTRY',
  Fetch_get_dashborad:'Fetch_get_dashborad',
  LOADING_END: 'LOADING_END',
  LOADING_NETWORK_ERROR: 'LOADING_NETWORK_ERROR',
  LOADING_START: 'LOADING_START',
  LOADING_TIMEOUT_ERROR: 'LOADING_TIMEOUT_ERROR',
  LOGIN: 'LOGIN',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  RECEIVE_AGENCY_PERFORMANCE_DATA: 'RECEIVE_AGENCY_PERFORMANCE_DATA',
  RESET_AGENCIES: 'RESET_AGENCIES',
  RESET_SALESMEN: 'RESET_SALESMEN',
  Recive_All_Select: 'RECIVE_ALL_SELECT',
  Recive_WX_INDUSTRY: 'REVIVE_WX_INDUSTRY',
  Recive_get_dashborad:'Recive_get_dashborad',
}
