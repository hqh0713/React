import React from 'react'
import { Toast } from 'antd-mobile'
import store from '../../store/index'
import { changeUserAccount } from '../../store/action'
import LoginUI from './loginUI'
import './index.less'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.storeChange = this.storeChange.bind(this)
    // 订阅store的变化
    store.subscribe(this.storeChange)
  }

  render() {
    return(
      <LoginUI
        changeInputValue={this.changeUser}
        login = {(value) => this.login(value)}
      ></LoginUI>
    )
  }
  login(value) {
    if(!value.length) {
      Toast.info('请输入账号')
      return
    }
    store.dispatch(changeUserAccount(value))
    this.props.history.push({
      pathname: '/'
    })
  }
  storeChange() {
    this.setState({
      userAccount: store.getState().userName
    })
  }
}