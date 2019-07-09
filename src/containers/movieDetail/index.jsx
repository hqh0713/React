import React, { Component } from 'react';
import { Button, Toast } from 'antd-mobile'
import { formDate } from '../../common/js/util'
import Navigate from '../../components/navigate'
import MarkStar from '../../components/markStar'
import axios from 'axios'
import './index.less'

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      judgeList: [],
      totalCount: '',
      showMarkAreaFlag: false,
      markContent: '' // 用户写的影评内容
    }
  }
  componentDidMount() {
    console.log(this.props.location.query)
    this.getMovieJudge();
    this.showMarkArea = this.showMarkArea.bind(this)
    this.uploadMark = this.uploadMark.bind(this)
    this.changeMarkContent = this.changeMarkContent.bind(this)
  }
  getMovieJudge() {
    axios.get('https://www.easy-mock.com/mock/5d0c4fa1389e205cf7f00912/movies/movieJudge')
    .then((res)=> {
      if(res.data.data.code === '0000') {
        this.setState({
          judgeList: res.data.data.judgeList,
          totalCount: res.data.data.totalCount
        })
      } else {
        Toast.info('服务器出错了，正在抢修。。。')
      }
    })
  }
  showMarkArea() {
    this.setState({
      showMarkAreaFlag: !this.state.showMarkAreaFlag
    })
  }
  changeMarkContent(event) {
    this.setState({
      markContent: event.target.value
    })
  }
  uploadMark() {
    if(!this.state.markContent.length){
      Toast.info('请输入内容')
      return
    }
    let num = Math.round(Math.random() * 5)
    let date = formDate(new Date(), 'yyyy-MM-dd')
    let mark = { name:'匿名用户', mark: num, date: date, contain: this.state.markContent}
    let markArr = this.state.judgeList
    markArr.push(mark)
    this.setState({
      judgeList: markArr,
      markContent: ''
    })
  }
  render() { 
    return ( 
      <div className='movie-judge'>
        <Navigate title='影评'></Navigate>
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
        <p className='remark' onClick={this.showMarkArea}>写影评</p>
        {this.state.showMarkAreaFlag?(
          <div>
            <textarea className='input-area' 
              value={this.state.markContent}
              onChange={this.changeMarkContent}>
            </textarea>
            <Button type="primary" onClick={ this.uploadMark }>提交</Button>
          </div>
        ) : ('') }
      </div>
     );
  }
}
 
export default MovieDetail;