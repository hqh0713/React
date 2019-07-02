import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import { Button, NavBar, Icon } from 'antd-mobile'

export default class Login extends React.Component {
  componentWillReceiveProps(){
    console.log('ddd')
  }
  render() {
    return(
      <div className='login'>
        <NavBar
          mode='light'
          icon={<Icon type='left'/>}>
          登陆</NavBar>
        <Button type='primary'>primary</Button>
        <Link to='/'>首页</Link>
      </div>
    )
  }
}