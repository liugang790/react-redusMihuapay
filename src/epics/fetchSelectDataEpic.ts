import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Rx'
import { reciveWXIndustry } from '../actions/fetchSelectDataAction'
import ActionType, { IEmptyAction } from '../actions/types'
import AjaxObservable from '../observables/ajaxObservable'
import { IStoreState } from '../store'

export default (action$: ActionsObservable<IEmptyAction>, store: MiddlewareAPI<IStoreState>) =>
action$.ofType(
  ActionType.Fetch_WX_Industry,
).switchMap(() =>
  AjaxObservable(
    {
      endponit: '/json/wx_industry.json',
      headers: {},
      host: '//ojxsui5xm.bkt.clouddn.com',
      withCredentials: false,
    },
    store,
  ),
).switchMap((response: object) =>
  Observable.of(reciveWXIndustry(response)),
)
