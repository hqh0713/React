import React, { Component } from 'react';
import axios from 'axios'
import './index.less'

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      judgeList: []
    }
  }
  componentDidMount() {
    console.log(this.props.location.query)
    this.getMovieJudge()
  }
  getMovieJudge() {
    axios.get('https://www.easy-mock.com/mock/5d0c4fa1389e205cf7f00912/movies/movieJudge')
    .then((res)=> {
      console.log(res.data)
      console.log(res.data.data.code)
      if(res.data.data.code === '0000') {
        this.setState({
          judgeList: res.data.data.judgeList
        })
      }
    })
  }
  render() { 
    return ( 
      <div className='movie-judge'>
        <p className='title'>xxx的短评······(全部xxxx条)</p>
        <ul className='judge-list'>
          {
          this.state.judgeList.map((item, index) => {
            return(
              <li className='judge-list-i' key={index}>
                <div>
                  <p>
                    <span>{item.name}</span>
                    看过
                    <image src='./star.png' />
                    <span>{item.date}</span>
                  </p>
                  <p>{item.contain}</p>
                </div>
              </li>  
              )})
              }
        </ul>
      </div>
     );
  }
}
 
export default MovieDetail;