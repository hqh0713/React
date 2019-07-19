import React from 'react'
import { Button, NavBar, Icon, Toast } from 'antd-mobile'
import store from '../../store/index'
import './index.less'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: ''
    }
    this.storeChange = this.storeChange.bind(this)
    // 订阅store的变化
    store.subscribe(this.storeChange)
  }

  render() {
    return(
      <div className='login'>
        <NavBar
          mode='light'
          icon={<Icon type='left'/>}>
          登陆
        </NavBar>
        <input 
          placeholder='请输入账号'
          maxLength='20' 
          className='user-account'
          onChange={this.changeUser.bind(this)}>
          </input>
        <Button type='primary' onClick={() => {this.login()}}>登陆</Button>
      </div>
    )
  }
  changeUser(e) {
    this.setState({
      userAccount: e.target.value
    })
  }
  login() {
    if(!this.state.userAccount.length) {
      Toast.info('请输入账号')
      return
    }
    const action = {
      type: 'changeUserAccount',
      value: this.state.userAccount
    }
    store.dispatch(action)
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