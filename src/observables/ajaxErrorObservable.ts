import { notification } from 'antd'
import { browserHistory } from 'react-router'
import { MiddlewareAPI } from 'redux'
import { Observable } from 'rxjs/Rx'
import { loadingEndAction } from '../actions/loadingAction'
import { IStoreState } from '../store'
import { MHBody } from './ajaxObservable'

export const AuthErrorObservable = (body: MHBody) =>
  Observable.of(body)
  .do(
    () => notification.error!({
      description: '请尝试重新登录',
      message: '登录凭证已过期',
    }),
  ).do(
    () => browserHistory.push('/signin'),
  ).skip(1)

export const BackServerErrorObservable = (body: MHBody) =>
  Observable.of(body)
  .do(
    () => notification.error!({
      description: '请稍后刷新重试',
      message: '银行服务器故障',
    }),
  ).skip(1)

export const ServerErrorObservable = (body: MHBody) =>
  Observable.of(body)
  .do(
    () => notification.error!({
      description: '请稍后刷新重试',
      message: '服务器故障',
    }),
  ).skip(1)

export const UnknownObservable = (error: Error, store: MiddlewareAPI<IStoreState>) =>
  Observable.of(loadingEndAction(error))
  .do(store.dispatch)
  // tslint:disable-next-line:no-string-literal
  .do(() => window['Ravern'] && window['Ravern'].captureException(error))
  .do(
    () => notification.error!({
      description: '请稍后刷新重试',
      message: '发生未知错误',
    }),
  ).skip(1)
