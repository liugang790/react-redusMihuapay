import { Layout } from 'antd'
import * as React from 'react'
import { connect } from 'react-redux'

import {
  fetchAgencyPerformanceDataAction,
} from '../../actions/dashboardAction'

import { IDashboardData, IStoreState } from '../../store'
import Overview from './components/dashboard/overview'

const { Header } = Layout

interface IProps {
  dashboardData: IDashboardData,
  fetchAgencyPerformanceDataAction: () => void,
}

export class Dashboard extends React.Component<IProps, {}> {

  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Header className="page-header">
          <span className="page-header-title">数据面板</span>
        </Header>
        <div className="page-content">
          <Overview
            title="今日运营数据"
            ordersPrice={this.props.dashboardData.today_orders_price}
            ordersCount={this.props.dashboardData.today_orders_count}
            merchantsCount={this.props.dashboardData.today_new_merchants_count}
          />
          <Overview
            title="本月运营数据"
            ordersPrice={this.props.dashboardData.this_month_orders_price}
            ordersCount={this.props.dashboardData.this_month_orders_count}
            merchantsCount={this.props.dashboardData.this_month_new_merchants_count}
          />
          <Overview
            title="总运营数据"
            ordersPrice={this.props.dashboardData.total_orders_price}
            ordersCount={this.props.dashboardData.total_orders_count}
            merchantsCount={this.props.dashboardData.total_new_merchants_count}
          />
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchAgencyPerformanceDataAction();
    console.log(this.props.fetchAgencyPerformanceDataAction());
  }
}

const mapStateToProps = (state: IStoreState) => ({
  dashboardData: state.dashboardData,
})

const mapDispatchToProps = {
  fetchAgencyPerformanceDataAction: fetchAgencyPerformanceDataAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
