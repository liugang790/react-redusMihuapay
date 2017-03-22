import { Col, Row } from 'antd'
import * as React from 'react'
import CSSModules from 'react-css-modules'

export interface OverviewProps {
  title: string
  ordersPrice: number
  ordersCount: number
  merchantsCount: number
}

export const Overview: React.StatelessComponent<OverviewProps> = (props: OverviewProps) => {
  const ordersAveragePrice = (Math.round(props.ordersPrice / props.ordersCount * 100) / 100) || 0
  return (
    <div styleName="overview">
      <p styleName="overview-title">{props.title}</p>
      <Row type="flex" justify="start">
        <Col span={6}>
          <div styleName="overview-item">
            <p styleName="overview-item-desc">交易金额(元)</p>
            <p styleName="overview-item-data">{(Math.round(props.ordersPrice * 100) / 100).toLocaleString('en-US')}</p>
          </div>
        </Col>
        <Col span={6}>
          <div styleName="overview-item">
            <p styleName="overview-item-desc">交易笔数(笔)</p>
            <p styleName="overview-item-data">{props.ordersCount.toLocaleString('en-US')}</p>
          </div>
        </Col>
        <Col span={6}>
          <div styleName="overview-item">
            <p styleName="overview-item-desc">笔均价(元)</p>
            <p styleName="overview-item-data">
              {ordersAveragePrice.toLocaleString('en-US')}
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div styleName="overview-item">
            <p styleName="overview-item-desc">签约商户(户)</p>
            <p styleName="overview-item-data">{props.merchantsCount.toLocaleString('en-US')}</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CSSModules(Overview, require('./overview.scss'))
