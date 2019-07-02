import React from 'react'
import { goBack } from '../../common/js/util'
import { NavBar, Icon } from 'antd-mobile'

export default class Mine extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     path: {
  //       pathname:'/',
  //       state: {id:3,name:'sam',age:36}
  //     }
  //   }
  // }
  render() {
    return(
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left'/>}
          onLeftClick={()=>this.goback()}>
          个人中心</NavBar>
        <span onClick={()=>{this.toIndex()}}>返回首页</span>
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