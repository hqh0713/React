import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XjjItem extends Component {
  constructor(props) {
    super(props)
    this.deleteIndex = this.deleteIndex.bind(this)
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