import { Button, Form, Icon, Input } from 'antd'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { autobind } from 'core-decorators'
import * as React from 'react'
import { FormEvent, ReactNode } from 'react'
import CSSModules from 'react-css-modules'
import { ILoginForm } from '../../../store/index'

interface ILoginFormProps {
  styles?: {
    submit: string,
  }
  form?: WrappedFormUtils
  onSubmit: (value: ILoginForm) => void
}

const userNameItem = (decorator: (text: string, rules: {}) => (element: ReactNode) => ReactNode) =>
  decorator(
    'account',
    {
      rules: [
        {
          message: '请输入账号',
          required: true,
        },
      ],
    },
  )(
    <Input addonBefore={<Icon type="user" />} placeholder="邮箱" />,
  )

const passwordItem = (decorator: (text: string, rules: {}) => (element: ReactNode) => ReactNode) =>
  decorator(
    'password',
    {
      rules: [
        {
          message: '请输入密码',
          required: true,
        },
      ],
    })(
      <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />,
    )

@CSSModules(require('./loginForm.scss'))
export class LoginFrom extends React.Component<ILoginFormProps, {}> {

  @autobind
  public handleSubmit(e: FormEvent<{}>) {
    e.preventDefault()
    this.props.form!.validateFields((err, values: ILoginForm) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    })
  }
  public render() {
    const { getFieldDecorator } = this.props.form!
    return (
        <Form
          onSubmit={this.handleSubmit}
        >
          <Form.Item>
            {userNameItem(getFieldDecorator)}
          </Form.Item>
          <Form.Item>
            {passwordItem(getFieldDecorator)}
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit" className={this.props.styles!.submit}>
              登录
          </Button>
          </Form.Item>
        </Form >
      )
    }
  }

export default Form.create()(LoginFrom)
