import React, { Component, Fragment } from 'react';
import Btn from '../../components/btn'
import XjjItem from '../../components/xjjItem';
import './index.css'
// import { hashHistory } from 'react-router'
// import XjjItem from './components/XjjItem'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'index Btn',
      value: '',
      list: ['1', '2']
    }
  }

  render() {
    return(
      <Fragment>
        <div>
          <span onClick={()=>{this.toLogin()}}>首页</span>
          <div onClick={()=>{this.cn()}}>输出</div>
          <Btn txt={'首页按钮'} btnCall={this.cn.bind(this)}></Btn>
          <div>
            <input className='input' value={this.state.value} onChange={this.inputChange.bind(this)}></input>
            <button onClick={()=>{this.addList()}}>增加</button>
          </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return(
                  <XjjItem 
                  key={item + index}
                  content={item} 
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}>
                  </XjjItem>
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }

  inputChange(e) {
    this.setState({ value: e.target.value })
  }
  addList() {
    this.setState({ list: [...this.state.list, this.state.value], value: '' });
  }
  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({ list: list });
  }
  toLogin() {
    console.log(this.props)
    this.props.history.push({
      pathname:'/mine',
      search: '?id=3'
    })
  }
  cn(value) {
    console.log(this)
    console.log(value)
  }
}