import React from 'react'
// import { Link } from 'react-router-dom'

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
  toIndex() {
    this.props.history.push({
      pathname: '/',
      state: {
        id: 4,
        name: '你好'
      }
    })
  }
  render() {
    return(
      <div>
        <h1>我的</h1>
        <span onClick={()=>{this.toIndex()}}>返回首页</span>
      </div>
    )
  }
}