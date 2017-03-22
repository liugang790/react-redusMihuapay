import { autobind } from 'core-decorators'
import * as React from 'react'
import { connect } from 'react-redux'

import { doubleClick } from '../../actions/clickAction'
import {
  fetchAllSelect,
  fetchWXIndustry,
  getDashboard,
} from '../../actions/fetchSelectDataAction'
import { loginAction } from '../../actions/loginAction'
import { IStoreState,IDashboardData } from '../../store'

interface IProps {
  children?: React.ReactType,
  dashboardData: IDashboardData,
  fetchAllSelect: () => void,
  fetchWXIndustry: () => void,
  getDashboard:() => void,
  doubleClick: () => void,
  loginAction: ({ account, password }: { account: string, password: string }) => void,
}

export class Sample2 extends React.Component<IProps, {}> {

  public static defaultProps = {
    temp: 0,
  }

  public constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div>
        <p>Sample2</p>
        <button onClick={this.onClick} > 获取网络数据 </button>
        <button onClick={this.getdashborad}>获取dashborad数据</button>
        <span>{JSON.stringify(this.props.dashboardData)}</span>
        <button onClick={this.onLoginClick({ account: 'hhm@qq.com', password: '12345678' })} > 登录 </button>
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchAllSelect()
  }

  @autobind
  private onClick() {
    this.props.fetchWXIndustry()
  }


  @autobind
  private getdashborad() {
    this.props.getDashboard();
  }

  @autobind
  private onLoginClick(loginInfo: { account: string, password: string }) {
    return () => this.props.loginAction(loginInfo)
  }
}

const mapStateToProps = (state: IStoreState) => ({
  dashboardData:state.getDashboard
})

const mapDispatchToProps = {
  fetchAllSelect,
  fetchWXIndustry,
  doubleClick,
  loginAction,
  getDashboard,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample2)
