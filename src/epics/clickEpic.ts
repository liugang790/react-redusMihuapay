import { ActionsObservable } from 'redux-observable'
import { doubleClickEnd } from '../actions/clickAction'
import { IEmptyAction } from './../actions/types'

export default (action$: ActionsObservable<IEmptyAction>) => action$.ofType(
  'CLICK',
).buffer(action$.ofType('CLICK').debounceTime(500))
.filter((list: IEmptyAction[]) => list.length === 2)
.mapTo(doubleClickEnd())
