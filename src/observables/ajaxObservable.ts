import { stringify } from 'query-string'
import { MiddlewareAPI } from 'redux'
import { AjaxRequest } from 'rxjs'
import { Observable } from 'rxjs/Rx'
import {
  AjaxResponse,
} from 'rxjs/observable/dom/AjaxObservable'
import {
  loadingEndAction,
  loadingStartAction,
} from '../actions/loadingAction'
import { IMetaAction } from '../actions/types'
import { IStoreState } from '../store'
import {
  AuthErrorObservable,
  BackServerErrorObservable,
  ServerErrorObservable,
  UnknownObservable,
} from './ajaxErrorObservable'

interface AjaxSettingInterface {
  host?: string
  endponit?: string
  queryParams?: object
  body?: object
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: object
  timeout?: number
  crossDomain?: boolean
  withCredentials?: boolean
  responseType?: string
  role?: string
}

export declare class MHBody {
  /** @type {string|ArrayBuffer|Document|object|object} The response data */
  // tslint:disable-next-line variable-name
  public result_body: object

  /** @type {string} The result status code */
  // tslint:disable-next-line variable-name
  public result_code: string

  /** @type {string} The result message */
  // tslint:disable-next-line variable-name
  public result_msg: string

  /** @type {string} The HTTP status code */
  // tslint:disable-next-line variable-name
  public status_code: string

  constructor(
    // tslint:disable-next-line variable-name
    result_body: object,
    // tslint:disable-next-line variable-name
    result_code: string,
    // tslint:disable-next-line variable-name
    result_msg: string,
    // tslint:disable-next-line variable-name
    status_code: string,
  )
}

export const resultCode = {
  authError: '10010401',
  backServerError: '10020500',
  filterError: '10010501',
  modelVerifyError: '10010422',
  notFoundError: '10010404',
  notRegisterError: '10020401',
  otherError: '10030400',
  paramsError: '10010400',
  repeatError: '10020400',
  serverError: '10010500',
  success: '10000000',
}

const defaultHost = process.env.API_HOST
const defaultMethod = 'GET'
const defaultTimeout = 10000
const defaultResponseType = 'json'

const requestHeaders = () => ({
  'Mihua-Token': localStorage.getItem('mhtk'),
  'content-type': 'application/json',
})

const filterAjaxSetting = (ajaxSetting: AjaxSettingInterface): AjaxRequest => ({
  body: ajaxSetting.body ? JSON.stringify(ajaxSetting.body) : undefined,
  crossDomain: true,
  headers: ajaxSetting.headers ? ajaxSetting.headers : requestHeaders(),
  method: String(ajaxSetting.method ? ajaxSetting.method : defaultMethod),
  responseType: ajaxSetting.responseType ? ajaxSetting.responseType : defaultResponseType,
  timeout: ajaxSetting.timeout ? ajaxSetting.timeout : defaultTimeout,
  url: `${
    ajaxSetting.host ? ajaxSetting.host : defaultHost
  }${
    ajaxSetting.endponit
  }?${
      stringify({
        request_role: ajaxSetting.role,
        ...ajaxSetting.queryParams,
      })
    }`,
  withCredentials: !!ajaxSetting.withCredentials,
})

const handleMHResponseObservable = (body: MHBody)
: Observable<object> => {
  switch (body.result_code) {
    case resultCode.authError:
      return AuthErrorObservable(body.result_body as MHBody)
    case resultCode.backServerError:
      return BackServerErrorObservable(body.result_body as MHBody)
    case resultCode.serverError:
      return ServerErrorObservable(body.result_body as MHBody)
    case resultCode.success:
      return Observable.of(body.result_body)
    default:
      return Observable.of(body.result_body)
  }
}

export default (ajaxSetting: AjaxSettingInterface, store: MiddlewareAPI<IStoreState>): Observable<object> =>
  Observable.of(loadingStartAction(filterAjaxSetting(ajaxSetting)))
            .do(store.dispatch)
            .switchMap(
              (requestAction: IMetaAction<AjaxRequest>) => Observable.ajax(requestAction.meta),
            ).map(
              (ajaxResponse: AjaxResponse) => loadingEndAction(ajaxResponse),
            ).do(store.dispatch)
            .map(
              (responseAction: IMetaAction<AjaxResponse>) => responseAction.meta.response,
            ).switchMap(
              (body: MHBody) => body.result_code ? handleMHResponseObservable(body) : Observable.of(body),
            ).catch((error: Error) => UnknownObservable(error, store))
