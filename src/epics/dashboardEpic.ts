import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Rx'
import { IStoreState } from '..//store'
import ActionTypes from '../actions/types'
import { IPayloadAction } from '../actions/types'
import AjaxObservable from '../observables/ajaxObservable'
import {IDashboardData} from '../store/index'

import {
  receiveAgencyPerformanceDataAction,
  IFetchAgencyPerformanceDataActionParams,
} from '../actions/dashboardAction'

export const fetchAgencyPerformanceEpic =
(
  action$: ActionsObservable<IPayloadAction<IFetchAgencyPerformanceDataActionParams>>,
  store: MiddlewareAPI<IStoreState>,
) =>
action$.ofType(
  ActionTypes.FETCH_AGENCY_PERFORMANCE_DATA,
).switchMap((action: IPayloadAction<IFetchAgencyPerformanceDataActionParams>) =>
  AjaxObservable(
    {
      body: action.payload,
      endponit: '/v1/agencies/1/performance',
      method: 'GET',
      role: 'hub',
    },
    store,
  ),
  ).switchMap((response: IDashboardData) =>
  Observable.of(receiveAgencyPerformanceDataAction(response)),
)
