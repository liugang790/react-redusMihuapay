import  getDashboard  from './getdashboradReducer';
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import agencies from './agenciesReducer'
import dashboardData from './dashboardReducer'
import loading from './loadingReducer'
import salesmen from './salesmenReducer'

export default combineReducers({
  routing,
  agencies,
  dashboardData,
  loading,
  salesmen,
  getDashboard,
})
