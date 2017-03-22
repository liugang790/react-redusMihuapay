import { Col, Row } from 'antd'
import { autobind } from 'core-decorators'
import * as React from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { loginAction } from '../../actions/loginAction'
import { ILoginForm } from '../../store'
import LoginForm from './components/loginForm'

interface IProps {
  children?: React.ReactType
  loginAction: (value: ILoginForm) => void
}

interface IState {
  loginForm: ILoginForm,
}

@CSSModules(require('./index.scss'))
export class Signin extends React.Component<IProps, IState> {

  public constructor(props: IProps) {
    super(props)
    this.state = {
      loginForm: {
        account: '',
        password: '',
      },
    }
  }

  public componentWillMount() {
    if (localStorage.getItem('mhtk')) {
      browserHistory.push('/')
    }
  }

  public render() {
    return (
      <div styleName="page-signin">
        <div styleName="header">
          <a href="//hub.cloudpayfs.com/signin">
            <img styleName="logo" src="//static.cloudpayfs.com/images/logo_with_agency@3x.png" alt="服务商平台"/>
          </a>
        </div>
        <div styleName="content">
          <Row>
            <Col
              sm={{ push: 13, span: 4 }}
              md={{ push: 15, span: 4 }}
              lg={{ push: 16, span: 4 }}
            >
              <div styleName="sign-box">
                <LoginForm onSubmit={this.onSubmit} />
              </div>
            </Col>
          </Row>
        </div>
        <div styleName="footer">
          米花金服信息技术有限公司
        </div>
      </div>
    )
  }

  @autobind
  private onSubmit(value: ILoginForm) {
    this.props.loginAction(value)
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  loginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
