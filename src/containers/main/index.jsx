import React, { Component, Fragment } from 'react';
import axios from 'axios'
import Banner from '../../components/banner/index'
import Grid from '../../components/gird'
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
          <Banner></Banner>
          <Grid></Grid>
          <ul ref={(ul) => {this.ul = ul}} className='movie-list'>
            {
              this.state.movielist.map((item, index) => {
                return(
                  <MovieItem 
                  key={item + index}
                  content={item} 
                  index={index}
                  detailItem={this.detailItem.bind(this)}>
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
  detailItem(index) {
    this.props.history.push({
      pathname: '/movieDetail',
      query: {
        index: index
      }
    })
  }
  toLogin() {
    this.props.history.push({
      pathname:'/mine',
      search: '?id=3'
    })
  }
}