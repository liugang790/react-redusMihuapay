import { Layout } from 'antd'
import * as React from 'react'
import OrderTable from './components/orderTable'

const columns = [
  { title: '序号', dataIndex: 'key', key: 'key'},
  { title: '名称', dataIndex: 'name', key: 'name'},
  { title: '联系人', dataIndex: 'owner_name', key: 'owner_name'},
  { title: '联系电话', dataIndex: 'owner_phone', key: 'owner_phone'},
]

const data = [
  { key: 1, name: '米花金服', owner_name: 'Tyler', owner_phone: '18980848558' },
  { key: 2, name: '米花金服', owner_name: 'Tyler', owner_phone: '18980848558' },
  { key: 3, name: '米花金服', owner_name: 'Tyler', owner_phone: '18980848558' },
  { key: 4, name: '米花金服', owner_name: 'Tyler', owner_phone: '18980848558' },
]

const { Header } = Layout

export default () => (
  <div>
    <Header className="page-header">
      <span className="page-header-title">订单列表</span>
    </Header>
    <div className="page-content">
      <OrderTable columns={columns} dataSource={data} bordered={true} />
    </div>
  </div>
)
