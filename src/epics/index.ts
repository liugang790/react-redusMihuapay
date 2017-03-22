import { combineEpics } from 'redux-observable'
import { IAction } from './../actions/types'
import { IStoreState } from './../store/index'
import { fetchAgenciesEpic } from './agencyEpic'
import clickEpic from './clickEpic'
import { fetchAgencyPerformanceEpic } from './dashboardEpic'
import { fetchgetboradEpic} from './fetchgetdashboradEpic'
import fetchAllSelectData from './fetchAllSelectData'
import fetchSelectData from './fetchSelectDataEpic'
import loginEpic from './loginEpic'
import { fetchSalesmenEpic } from './salesmanEpic'

export default combineEpics<IAction<object, object>, IStoreState>(
  fetchAgenciesEpic,
  clickEpic,
  fetchAgencyPerformanceEpic,
  fetchAllSelectData,
  fetchSelectData,
  loginEpic,
  fetchSalesmenEpic,
  fetchgetboradEpic,
)
