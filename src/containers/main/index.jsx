import React, { Component, Fragment } from 'react';
import axios from 'axios'
import Btn from '../../components/btn'
import MovieItem from '../../components/movieItem';
import './index.less'
// import { hashHistory } from 'react-router'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'index Btn',
      value: '',
      movielist: []
    }
  }
  componentDidMount() {
    console.log('componentDidMount')
    axios.post('https://www.easy-mock.com/mock/5d0c4fa1389e205cf7f00912/movies/getMovies')
    .then((res) => {
      if (res.data.data.code === '0000') {
        this.setState({
          movielist: res.data.data.movies
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return(
      <Fragment>
        <div className='container'>
          <span onClick={()=>{this.toLogin()}}>首页</span>
          <div onClick={()=>{this.cn()}}>输出</div>
          <Btn txt={'首页按钮'} btnCall={this.cn.bind(this)}></Btn>
          <div>
            <input 
              className='input' 
              value={this.state.value} 
              onChange={this.inputChange.bind(this)}
              ref={(input) => {this.input = input}}>
            </input>
            <button onClick={()=>{this.addList()}}>增加</button>
          </div>
          <ul ref={(ul) => {this.ul = ul}} className='movie-list'>
            {
              this.state.movielist.map((item, index) => {
                return(
                  <MovieItem 
                  key={item + index}
                  content={item} 
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}>
                  </MovieItem>
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }

  inputChange() {
    this.setState({ value: this.input.value })
  }
  addList() {
    this.setState({ 
      list: [...this.state.list, this.state.value], 
      value: '' 
    });
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