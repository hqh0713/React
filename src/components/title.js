import React from 'react'
import PropTypes from 'prop-types'

export default class Tit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      myTitle: props.title
    }
    // this.older = this.older.bind(this);
  }
  older() {
    this.setState({
      id: this.state.id + 1
    })
  }
  cnId() {
    this.props.showId(this.state.id);
  }
  changeClk() {
    console.log(this.state.id);
    this.props.change(this.state.id);
  }
  changeInput(event) {
    this.setState({
      myTitle: event.target.value
    })
  }
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <span>{this.state.myTitle}</span>
        <div>{this.state.id}</div>
        <ul>
          {this.props.user.hobbies.map((hob,i) => <li key={i}>{hob}</li>)}
        </ul>
        <div onClick={()=>{this.older()}}>{this.props.children}</div>
        <button onClick={()=> {this.cnId()}}>great</button>
        <button onClick={()=>{this.changeClk()}}>change click desc</button>
        <input placeholder='请输入' onChange={(event) => {this.changeInput(event)}}></input>
      </div>
    )
  }
}
Tit.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  user: PropTypes.object
};