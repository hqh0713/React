import React, { Component } from 'react';
import { Grid } from 'antd-mobile'
import './index.less'

class IndexGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [{
        index: 1,
        title: '超值抢购',
        imgUrl: require('./buy.jpeg')
      }, {
        index: 2,
        title: '会员中心',
        imgUrl: require('./vip.jpeg')
      },{
        index: 3,
        title: '任务中心',
        imgUrl: require('./rw.png')
      }]
    }
  }
  render() { 
    return ( 
      <Grid 
        className='grid-list'
        data={this.state.data}
        columnNum={3}
        hasLine='false'
        renderItem={dataItem => (
        <div>
          <img src={dataItem.imgUrl} style={{ width: '50px', height: '50px',borderRadius: '25px', backgroundSize: '30px 30px' }} alt="" />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '5px' }}>
            <span>{dataItem.title}</span>
          </div>
        </div>
      )}
    />
     );
  }
}
 
export default IndexGrid;