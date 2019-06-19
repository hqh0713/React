import React from 'react'

export default class Btn extends React.Component {
  childValDispatch (msg) {
   this.props.btnCall(msg)
  }
  render() {
    return (
      <button onClick={()=>{this.childValDispatch('dddd')}}>{this.props.txt || '按钮'}</button>
    )
  }
}