import { AjaxRequest } from 'rxjs'
import ActionTypes, { IEmptyAction } from './types'

export const loadingStartAction = (meta: AjaxRequest) => ({
  meta,
  type: ActionTypes.LOADING_START,
})

export const loadingEndAction = (meta: object) => ({
  meta,
  type: ActionTypes.LOADING_END,
})

export const loadingNetworkError = (): IEmptyAction => ({
  type: ActionTypes.LOADING_NETWORK_ERROR,
})

export const loadingTimeoutError = (): IEmptyAction => ({
  type: ActionTypes.LOADING_TIMEOUT_ERROR,
})
