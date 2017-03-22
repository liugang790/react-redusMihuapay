import { Layout } from 'antd'
import * as React from 'react'
import { connect } from 'react-redux'

import {
  fetchSalesmenAction,
} from '../../actions/salesmanAction'
import { ISalesman, IStoreState } from '../../store'
import SalesManTable from './components/salesManTable'

const columns = [
  { key: 'id' , title: '序号', dataIndex: 'id'},
  { key: 'name' , title: '姓名', dataIndex: 'name'},
  { key: 'role' , title: '角色', dataIndex: 'role'},
  { key: 'phone' , title: '手机号', dataIndex: 'phone'},
  { key: 'email' , title: '邮箱', dataIndex: 'email'},
]

const { Header } = Layout

interface IStateProps {
  salesmen: ISalesman[]
}

interface IDispatchProps {
  fetchSalesmenAction: () => void
}

export type IProps = IStateProps & IDispatchProps

export class SalesmanList extends React.Component<IProps, {}> {
  public constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div>
        <Header className="page-header">
          <span className="page-header-title">业务员列表</span>
        </Header>
        <div className="page-content">
          <SalesManTable rowKey="id" columns={columns} dataSource={this.props.salesmen} bordered={true} />
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchSalesmenAction()
  }
}

const mapStateToProps = (state: IStoreState) => ({
  salesmen: state.salesmen,
})

const mapDispatchToProps = {
  fetchSalesmenAction,
}

export default connect<IStateProps, IDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(SalesmanList)
