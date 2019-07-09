import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'
function Nav(props) {
  return (
    <div className='navgrate'>
      <ul className='nav-list'>
        <li className={props.activeIndex === 0? 'active': ''}>
          <Link to='/'>首页
            <i className='iconfont icon-shouye_weixuanzhong'></i>
          </Link></li>
        <li className={props.activeIndex === 1? 'active': ''}>
          <Link to='/mine'>我的
            <i className='iconfont icon-wode_weixuanzhong'></i>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Nav
