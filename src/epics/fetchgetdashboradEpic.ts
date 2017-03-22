import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Rx'
import { IStoreState } from '..//store'
import ActionTypes from '../actions/types'
import { IPayloadAction } from '../actions/types'
import AjaxObservable from '../observables/ajaxObservable'
import { IDashboardData } from '../store/index'

import {
  receiveDashboard,
  IFetchAgencyPerformanceDataActionParams,
} from '../actions/fetchSelectDataAction'

export const fetchgetboradEpic =
  (
    action$: ActionsObservable<IPayloadAction<IFetchAgencyPerformanceDataActionParams>>,
    store: MiddlewareAPI<IStoreState>,
  ) =>
    action$.ofType(
      ActionTypes.Fetch_get_dashborad,
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
      Observable.of(receiveDashboard(response)),
    )
