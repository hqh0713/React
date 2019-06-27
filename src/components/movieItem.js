import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movieItem.css'

class XjjItem extends Component {
  constructor(props) {
    super(props)
    this.deleteIndex = this.deleteIndex.bind(this)
  }
  // 组件是否要重新更新渲染
  shouldComponentUpdate(nextProps, nextState) {
    // if(nextProps.content!==this.props.content) {
    //   return true
    // } else {
    //   return false
    // }
    return false
  }
  render() { 
    return (
      <li onClick={this.deleteIndex}>
       <div className='movie'>
         <div className='left'>
           1
         </div>
         <div className='right'>
           {this.props.content.movieName}
         </div>
       </div>
      </li>
    );
  }
  deleteIndex() {
    console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
}
XjjItem.protoTypes={
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deleteIndex: PropTypes.func.isRequired
}
XjjItem.defaultProps={
  name: '你的名字'
}
 
export default XjjItem;