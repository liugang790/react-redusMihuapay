import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Rx'
import { reciveAllSelect } from '../actions/fetchSelectDataAction'
import ActionType from '../actions/types'
import AjaxObservable from '../observables/ajaxObservable'
import { IStoreState } from '../store'
import { IEmptyAction } from './../actions/types'

export default (action$: ActionsObservable<IEmptyAction>, store: MiddlewareAPI<IStoreState>) =>
action$.ofType(
  ActionType.Fetch_All_Select,
).switchMap(
  () =>
  Observable.zip(
    AjaxObservable(
      {
        endponit: '/json/wx_industry.json',
        headers: {},
        host: '//ojxsui5xm.bkt.clouddn.com',
        withCredentials: false,
      },
      store,
    ),
    AjaxObservable(
      {
        endponit: '/json/wx_industry.json',
        headers: {},
        host: '//ojxsui5xm.bkt.clouddn.com',
        withCredentials: false,
      },
      store,
    ),
    AjaxObservable(
      {
        endponit: '/json/wx_industry.json',
        headers: {},
        host: '//ojxsui5xm.bkt.clouddn.com',
        withCredentials: false,
      },
      store,
    ),
)).switchMap(
  (response: object) => Observable.of(reciveAllSelect(response)),
)
