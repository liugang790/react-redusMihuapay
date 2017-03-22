import * as React from 'react'
import { connect } from 'react-redux'

import { doubleClick } from '../../actions/clickAction'
import {
  fetchAllSelect,
  fetchWXIndustry,
  getDashboard,
} from '../../actions/fetchSelectDataAction'
import { loginAction } from '../../actions/loginAction'
import { IStoreState, IDashboardData } from '../../store'

interface IProps {
  children?: React.ReactType,
  dashboardData: IDashboardData,
  fetchAllSelect: () => void,
  fetchWXIndustry: () => void,
  getDashboard:() => void,
  doubleClick: () => void,
  loginAction: ({ account, password }: { account: string, password: string }) => void,
}

export const Sample: React.StatelessComponent<IProps> = (props: IProps) => {
  const {
    fetchAllSelect:fetchAllSelect,
    fetchWXIndustry: fetchWXIndustry,
    getDashboard: getDashboard,
    loginAction: loginAction,
  } = props
  const onClick = () => fetchWXIndustry()
  const onFetchAllClick = () => fetchAllSelect()
  const ongetDashboard = () => getDashboard()
  const onloginClick = () => loginAction({ account: 'tyler@qq.com', password: '12345678' })
  return (
    <div>
      <button onClick={onClick} > 获取网络数据 </button>
      <button onClick={onFetchAllClick} > 获取一堆网络数据 </button>
      <button onClick={onloginClick} > 登录 </button>
      <button onClick={ongetDashboard}>获取dashboard数据</button>
      <span>{JSON.stringify(props.dashboardData)}</span>
    </div>
  )

}

const mapStateToProps = (state: IStoreState) => ({
  dashboardData: state.getDashboard,
})


const mapDispatchToProps = {
  fetchAllSelect:fetchAllSelect,
  fetchWXIndustry:fetchWXIndustry,
  doubleClick:doubleClick,
  loginAction:loginAction,
  getDashboard: getDashboard,
}



export default connect(mapStateToProps, mapDispatchToProps)(Sample)
