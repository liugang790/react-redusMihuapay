import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Rx'
import ActionTypes from '../actions/types'
import { IEmptyAction } from '../actions/types'
import AjaxObservable from '../observables/ajaxObservable'
import { IStoreState } from '../store'
import {ISalesman} from '../store/index'

import {
  resetSalesmenAction,
} from '../actions/salesmanAction'

export const fetchSalesmenEpic = (action$: ActionsObservable<IEmptyAction>, store: MiddlewareAPI<IStoreState>) =>
action$.ofType(
  ActionTypes.FETCH_SALESMEN,
).switchMap(() =>
  AjaxObservable(
    {
      endponit: '/v1/agencies/1/salesmen',
      method: 'GET',
      role: 'hub',
    },
    store,
  ),
).switchMap((response: ISalesman) =>
  Observable.of(resetSalesmenAction(response)),
)
