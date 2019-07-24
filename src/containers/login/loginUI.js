import React, { Component } from 'react';
import { Button, NavBar, Icon } from 'antd-mobile'
import './index.less'

class LoginUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: ''
    }
  }
  render() { 
    return (
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
        onChange={this.changeUser}
        >
        </input>
      <Button type='primary' onClick={this.login}>登陆</Button>
    </div>
    );
  }
  changeUser = (e) => {
    this.setState({
      userAccount: e.target.value
    })
  }
  login = () => {
    this.props.login(this.state.userAccount)
  }
}
 
export default LoginUI;