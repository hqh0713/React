import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'

export default class Nav extends React.Component{
  render() {
    return(
      <div className='navgrate'>
      <ul className='nav-list'>
        <li><Link to='/'>首页</Link></li>
        {/* <li><Link to='/login'>登陆</Link></li> */}
        <li><Link to='/mine'>我的</Link></li>
      </ul>
    </div>
    )
  }
}