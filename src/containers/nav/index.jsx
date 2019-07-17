import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../common/less/base.less'
import './index.less'
function Nav(props) {
  return (
    <div className='navgrate'>
      <ul className='nav-list'>
        <li className={props.activeIndex === 0? 'active': ''}>
          <NavLink to='/' activeClassName="active">
            <p className='desc'>首页</p>
            <i className='iconfont icon-shouye'></i>
          </NavLink></li>
        <li className={props.activeIndex === 1? 'active': ''}>
          <NavLink to='/mine' activeClassName="active">
            <p className='desc'>我的</p>
            <i className='iconfont icon-wode'></i>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Nav
