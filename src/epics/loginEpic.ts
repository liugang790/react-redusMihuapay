import { browserHistory } from 'react-router'
import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Rx'
import {
  loginSuccessAction,
} from '../actions/loginAction'
import ActionType from '../actions/types'
import AjaxObservable from '../observables/ajaxObservable'
import { ILoginForm, IStoreState } from '../store'
import { IPayloadAction } from './../actions/types'

export default (action$: ActionsObservable<IPayloadAction<ILoginForm>>, store: MiddlewareAPI<IStoreState>) =>
action$.ofType(
  ActionType.LOGIN,
).switchMap((action: IPayloadAction<ILoginForm>) =>
  AjaxObservable(
    {
      body: action.payload,
      endponit: '/v1/hub/auth/login',
      method: 'POST',
      role: 'hub',
    },
    store,
  ),
).switchMap((response: { token: string }) => {
    localStorage.setItem('mhtk', response.token)
    browserHistory.push('/dashboard')
    return Observable.of(loginSuccessAction())
})
