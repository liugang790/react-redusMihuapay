import { Input, Layout } from 'antd'
import { autobind } from 'core-decorators'
import * as React from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { fetchAgencies, IFetchAgenciesAction } from '../../actions/agencyAction'
import { IAgency, IStoreState } from '../../store'
import AgencyTable from './components/agencyTable'

const columns = [
  { key: 'id', title: '序号', dataIndex: 'id' },
  { key: 'name', title: '名称', dataIndex: 'name' },
  { key: 'province', title: '省份', dataIndex: 'province' },
  { key: 'city', title: '城市', dataIndex: 'city' },
  { key: 'owner_name', title: '联系人', dataIndex: 'owner_name' },
  { key: 'owner_phone_number', title: '手机号', dataIndex: 'owner_phone_number' },
  { key: 'salesmen_count', title: '业务员人数', dataIndex: 'salesmen_count' },
  { key: 'merchant_count', title: '商户数量', dataIndex: 'merchant_count' },
]

const { Header } = Layout
const Search = Input.Search

interface IProps {
  agencies: IAgency[],
  fetchAgencies: IFetchAgenciesAction,
}

const styles = require('./index')

@CSSModules(styles)
export class AgencyList extends React.Component<IProps, {}> {
  public constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div className="page-agencies">
        <Header className="page-header">
          <span className="page-header-title">服务商列表</span>
        </Header>
        <div className="page-content">
          <div className="search-bar">
            <Search
              size="large"
              onSearch={this.onSearch}
              placeholder="搜索：序号、公司名、省份、城市、联系人、手机号"
            />
          </div>
          <AgencyTable
            rowKey="id"
            columns={columns}
            dataSource={this.props.agencies}
            bordered={true}
          />
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchAgencies()
  }

  @autobind
  private onSearch(value: string) {
    console.log(value)
  }
}

const mapStateToProps = (state: IStoreState) => ({
  agencies: state.agencies,
})

const mapDispatchToProps = {
  fetchAgencies,
}

export default connect(mapStateToProps, mapDispatchToProps)(AgencyList)
