import React from 'react'
import { goBack } from '../../common/js/util'
import { NavBar, Icon } from 'antd-mobile'
import store from '../../store'
import '../../common/less/base.less'
import './index.less'

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    //关键代码-----------end
    this.state = {
      userName: '',
      timer: '',
      listArr: [
        {text: '会员中心·福利', desc: '有升级礼包可领取'},
        {text: '会员中心', desc: '再积100分可升级'}
      ]
    }
  }
  componentDidMount() {
    this.isLogin()
    
  }
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
  render() {
    return(
      <div className='mine-contain'>
        <NavBar
          mode='light'
          icon={<Icon type='left'/>}
          onLeftClick={()=>this.goback()}>
          个人中心
        </NavBar>
        <div className='user-wrap'>
          <div className='user'>
            <span className='user-img'></span>
            <span className='user-name'>{this.state.userName}</span>
          </div>
        </div>
        <div className='member-wrap'>
          <div className='left'>
            <p className='member-lever'>青铜会员</p>
            <p className='member-num'>会员积分 <span className='num'>100</span></p>
          </div>
          <span className='line'></span>
          <div className='right'>
            <ul className='scroll-list' ref='datelist' id='datelist'>
              {
                this.state.listArr.map((item, index) => {
                  return(
                    <li className='scroll-list-i' key={index}>
                      <p className='text'>{item.text}</p>
                      <p>{item.desc}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className='chose-wrap'>
          <div className='left'>
            <i className='iconfont icon-dianying1'></i>
            <p className='name'>电影票</p>
          </div>
          <div className='right'>
            <i className='iconfont icon-baomihua'></i>
            <p className='name'>小食</p>
          </div>
        </div>
        <div className='discount-wrap'>
          <p className='title'>我的优惠</p>
          <ul className='discount-list'>
            <li className='discount-list-i'>
              <i className='iconfont icon-f2'></i>
              <p className='desc'>优惠券</p>
            </li>
            <li className='discount-list-i'>
              <i className='iconfont icon-vip'></i>
              <p className='desc'>贵宾卡</p>
            </li>
            <li className='discount-list-i'>
              <i className='iconfont icon-ic_yanchu'></i>
              <p className='desc'>演出卡</p>
            </li>
          </ul>
        </div>
        <div className='record-wrap'>
          <p className='title'>我的记录</p>
          <ul className='discount-list'>
            <li className='discount-list-i'>
              <span className='movie-img'></span>
              <div className='desc'>
                <p>想看</p>
                <p>共0部</p>
              </div>
            </li>
            <li className='discount-list-i'>
              <span className='movie-img'></span>
              <div className='desc'>
                <p>看过</p>
                <p>共0部</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  isLogin() {
    let storeList = store.getState()
    if(!storeList.userName) {
      this.props.history.push({
        pathname: 'login'
      })
    } else {
      this.setState({
        userName: storeList.userName
      })
      this.starTimer()
    }
  }
  // 开始滚动
  starTimer() {
    let timer = setInterval(() => {
      if (this.refs.datelist.scrollTop >= 44) {
        this.refs.datelist.scrollTop = 0
      }
      this.refs.datelist.scrollTop = this.refs.datelist.scrollTop + 1
    }, 60)
    this.setState({
      timer: timer
    })
  }
  goback() {
    clearInterval(this.state.timer)
    goBack()
  }
  toIndex() {
    this.props.history.push({
      pathname: '/',
      state: {
        id: 4,
        name: '你好'
      }
    })
  }
}