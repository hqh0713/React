import React from 'react'
import { goBack } from '../../common/js/util'
import { NavBar, Icon } from 'antd-mobile'
import '../../common/less/base.less'
import './index.less'

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArr: [
        {text: '会员中心·福利', desc: '有升级礼包可领取'},
        {text: '会员中心', desc: '再积100分可升级'}
      ]
    }
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
            <span className='user-name'>用户0001</span>
          </div>
        </div>
        <div className='member-wrap'>
          <div className='left'>
            <p className='member-lever'>青铜会员</p>
            <p className='member-num'>会员积分 <span className='num'>100</span></p>
          </div>
          <span className='line'></span>
          <div className='right'>
            <ul className='scroll-list'>
              {
                this.state.listArr.map((item, index) => {
                  return(
                    <li className='scroll-list-i'>
                      <p className='text'>{item.text}</p>
                      <p>{item.desc}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
  goback() {
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