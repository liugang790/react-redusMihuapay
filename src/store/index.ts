
export interface IAgency {
  id: number
  name: string
  provicen: string
  city: string
  address: string
  created_at: string
}

export interface ISalesman {
  id: number
  name: string
  phone: string
}

export interface IDashboardData {
  this_month_new_merchants_count: number
  this_month_orders_count: number
  this_month_orders_price: number
  today_new_merchants_count: number
  today_orders_count: number
  today_orders_price: number
  total_new_merchants_count: number
  total_orders_count: number
  total_orders_price: number
}

export interface ILoginForm {
  account: string
  password: string
}

export interface IFormField {
  [name: string]: {
    dirty: boolean
    errors: {}
    name: string
    touched: boolean
    validating: boolean
    value: {},
  }
}

export interface IForm {
  login: ILoginForm
}

export interface IStoreState {
  routing: object
  agencies: IAgency[]
  dashboardData: IDashboardData
  loading: number
  salesmen: ISalesman[]
  form: IForm
  getDashboard: IDashboardData
}
