import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';

class XjjItem extends Component {
  constructor(props) {
    super(props)
    this.deleteIndex = this.deleteIndex.bind(this)
  }
  componentDidMount() {
    console.log('componentDidMount')
    axios.post('https://www.easy-mock.com/mock/5d0c4fa1389e205cf7f00912/movies/getMovies')
    .then((res) => {
    console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
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
       {this.props.name} {this.props.content}
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