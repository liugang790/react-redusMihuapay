import { Icon, Layout, Menu } from 'antd'
import { SelectParam } from 'antd/lib/menu'
import * as React from 'react'
import CSSModules from 'react-css-modules'
import { browserHistory } from 'react-router'

const styles = require('./index.scss')

const { Sider, Content } = Layout

const menuConfigs = [
  {
    key: 'dashboard',
    text: '数据面板',
    type: 'pie-chart',
    url: '/dashboard',
  },
  {
    key: 'agencies',
    text: '服务商列表',
    type: 'solution',
    url: '/agencies',
  },
  {
    key: 'salesmen',
    text: '业务员列表',
    type: 'team',
    url: '/salesmen',
  },
  // {
  //   key: 'merchants',
  //   text: '商户列表',
  //   type: 'rocket',
  //   url: '/merchants',
  // },
  // {
  //   key: 'orders',
  //   text: '订单列表',
  //   type: 'credit-card',
  //   url: '/orders',
  // },
  // {
  //   key: 'profits',
  //   text: '分佣查询',
  //   type: 'pay-circle-o',
  //   url: '/profits',
  // },
]

interface SiderMenuItemProps {
  key: string
  text: string
  type: string
  url: string
}

const menuItems = menuConfigs.map((menuConfig: SiderMenuItemProps) => {
  const { text, type , url } = menuConfig
  return (
    <Menu.Item
      key={url}
    >
      <span>
        <Icon type={type} />
        {text}
      </span>
    </Menu.Item>
  )
})

export const Index: React.StatelessComponent<React.Props<object>> = (props: React.Props<object>) => {
  const onSelect = (selectParam: SelectParam) => {
    if (selectParam.key.includes('logout')) {
      localStorage.clear()
      browserHistory.push('/signin')
    } else {
      browserHistory.push(selectParam.key.replace('.0:$', ''))
    }
  }
  return (
    <Layout styleName="page-container">
      <Sider width="135">
        <div styleName="logo">米花金服</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          style={{ height: '100%' }}
          onSelect={onSelect}
        >
          {menuItems}
          <Menu.Item
            key="logout"
            style={{position: 'absolute', bottom: '20px'}}
          >
            <span>
              <Icon type="logout" />
              退出登录
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content styleName="page-main">
        {props.children}
      </Content>
    </Layout>
  )
}

export default CSSModules(Index, styles)
