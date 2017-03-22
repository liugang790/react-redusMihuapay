import { ILoginForm } from '../store'
import ActionTypes, { IEmptyAction, IPayloadAction } from './types'

export const loginAction = (loginData: ILoginForm): IPayloadAction<ILoginForm> => ({
  payload: loginData,
  type: ActionTypes.LOGIN,
})

export const loginErrorAction = (): IEmptyAction => ({
  type: ActionTypes.LOGIN_ERROR,
})

export const loginSuccessAction = (): IEmptyAction => ({
  type: ActionTypes.LOGIN_SUCCESS,
})
