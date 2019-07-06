import React, { Component } from 'react';
import './index.less'
class MarkStar extends Component {
  constructor(props){
    super(props);
    this.state = {
      y: ''
    }
  }
  componentDidMount() {
    this.martToPosition(this.props.mark)
  }
  martToPosition(mark) {
    this.setState({
      y: -22 * (5 - mark) + 'px'
    })
  }
  render() { 
    return (
      <span className='star' style={{backgroundPosition: `0px ${this.state.y}`}}></span>
    );
  }
}
 
export default MarkStar;