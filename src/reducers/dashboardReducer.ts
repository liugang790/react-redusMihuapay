import ActionTypes from '../actions/types'
import { IDashboardData } from '../store'
import { IPayloadAction } from './../actions/types'

const defaultValue: IDashboardData = {
  this_month_new_merchants_count: 0,
  this_month_orders_count: 0,
  this_month_orders_price: 0,
  today_new_merchants_count: 0,
  today_orders_count: 0,
  today_orders_price: 0,
  total_new_merchants_count: 0,
  total_orders_count: 0,
  total_orders_price: 0,
}

export default (
  dashboardData: IDashboardData = defaultValue,
  action: IPayloadAction<IDashboardData>,
): IDashboardData => {
  switch (action.type) {
  case ActionTypes.RECEIVE_AGENCY_PERFORMANCE_DATA:
    return action.payload
  default:
    break
  }
  return dashboardData
}

console.log("aa");
console.log(defaultValue);
