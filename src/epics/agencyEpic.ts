import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import ActionTypes from '../actions/types'
import AjaxObservable from '../observables/ajaxObservable'
import { IStoreState } from '../store'
import {
  resetAgencie,
  IFetchAgenciesResult,
  IResetAgenciePayload,
} from './../actions/agencyAction'

export const fetchAgenciesEpic =
  (action$: ActionsObservable<IFetchAgenciesResult>, store: MiddlewareAPI<IStoreState>) =>
action$.ofType(
  ActionTypes.FETCH_AGENCIES,
).switchMap((action: IFetchAgenciesResult) =>
  AjaxObservable(
    {
      body: action.payload,
      endponit: '/v1/agencies/1/agencies',
      method: 'GET',
      role: 'hub',
    },
    store,
  ),
).map((response: IResetAgenciePayload) =>
  resetAgencie(response),
)
