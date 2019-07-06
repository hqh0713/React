import React, { Component } from 'react';
import MarkStar from '../../components/markStar'
import axios from 'axios'
import './index.less'

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      judgeList: [],
      totalCount: '',
      showMarkAreaFlag: false
    }
  }
  componentDidMount() {
    console.log(this.props.location.query)
    this.getMovieJudge();
  }
  getMovieJudge() {
    axios.get('https://www.easy-mock.com/mock/5d0c4fa1389e205cf7f00912/movies/movieJudge')
    .then((res)=> {
      if(res.data.data.code === '0000') {
        this.setState({
          judgeList: res.data.data.judgeList,
          totalCount: res.data.data.totalCount
        })
      }
    })
  }
  showMarkArea() {
    this.setState({
      showMarkAreaFlag: !this.state.showMarkAreaFlag
    })
  }
  render() { 
    return ( 
      <div className='movie-judge'>
        <p className='title'>千与千寻的短评 · · · · · · 
          <span className='total'>(全部{this.state.totalCount}条)</span>
          </p>
        <ul className='judge-list'>
          {
          this.state.judgeList.map((item, index) => {
            return(
              <li className='judge-list-i' key={index}>
                <div>
                  <p className='detail'>
                    <span className='name'>{item.name}</span>
                    看过
                    <MarkStar mark={item.mark} className='star'></MarkStar>
                    <span className='date'>{item.date}</span>
                  </p>
                  <p className='contain'>{item.contain}</p>
                </div>
              </li>  
              )})
              }
        </ul>
        <p className='remark' onClick={() => this.showMarkArea()}>写影评</p>
        {this.state.showMarkAreaFlag?(
          <textarea className='input-area'></textarea>
        ) : ('') }
      </div>
     );
  }
}
 
export default MovieDetail;