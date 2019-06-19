import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class Login extends React.Component {
  componentWillReceiveProps(){
    console.log('ddd')
  }
  render() {
    return(
      <div className='login'>
        <h1>登陆页</h1>
        <Link to='/'>首页</Link>
      </div>
    )
  }
}