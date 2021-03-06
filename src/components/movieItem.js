import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movieItem.less'

class MovieItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: ''
    }
    this.detailItem = this.detailItem.bind(this)
  }
  componentWillMount() {
    console.log(this.props.content)
    let img = ''
    switch(this.props.content.movieImgUrl){
        case '1':
          img = require('./images/movie_1.webp')
          break
        case '2':
            img = require('./images/movie_2.webp')
            break
        case '3':
            img = require('./images/movie_3.webp')
            break   
        case '4':
            img = require('./images/movie_4.webp')
            break  
        case '5':
            img = require('./images/movie_5.webp')
            break
        default:  
             img = require('./images/movie_5.webp')  
             break       
    }
    this.setState({
      imgUrl: img
    })
  }
  // 组件是否要重新更新渲染
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content!==this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() { 
    return (
      <li className='movie-list-i'>
       <div className='movie'>
         <div className='left'>
           <img src={this.state.imgUrl} alt='#' className='image'></img>
         </div>
         <div className='right'>
             <div className='movie-desc'>
               <label>电影名：<span className='blue-desc'>{this.props.content.movieName}</span></label>
             </div>
             <div className='movie-desc'>
               <label>导演：<span className='blue-desc'>{this.props.content.movieDirector}</span></label>
             </div>
             <div className='movie-desc'>
               <label>类型：<span>{this.props.content.movieType}</span></label>
             </div>
             <div className='movie-desc'>
               <label>上映日期：<span>{this.props.content.movieScreen}</span></label>
             </div>
             <div className='movie-desc'>
               <label>片长：<span>{this.props.content.movieTime}</span></label>
             </div>
             <div className='movie-desc'>
               <label>评分：{this.props.content.movieMark}</label>
             </div>
             <div className='movie-desc' onClick={this.detailItem}>
               <div className='desc'>剧情描述：{this.props.content.movieDescribe}</div>
             </div>
         </div>
       </div>
      </li>
    );
  }
  detailItem() {
    this.props.detailItem(this.props.index)
  }
}
MovieItem.protoTypes={
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  detailItem: PropTypes.func.isRequired
}
MovieItem.defaultProps={
  name: '你的名字'
}
 
export default MovieItem;