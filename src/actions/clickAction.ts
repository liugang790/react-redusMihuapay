import { IEmptyAction } from './types'

export type IDoubleClickResult = IEmptyAction

export type IDoubleClickAction = () => IEmptyAction

export const doubleClick = (): IDoubleClickResult => ({
  type: 'CLICK',
})

export type IDoubleClickEnd = IEmptyAction

export type IDoubleClickEndAction = () => IEmptyAction

export const doubleClickEnd = (): IDoubleClickEnd => ({
  type: 'DOUBLE_CLICK',
})
