import React, { Component } from 'react';
import { Grid } from 'antd-mobile'
import './index.less'

class IndexGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [{
        index: 1,
        title: 'xxx'
      }, {
        index: 2,
        title: 'yyyy'
      },{
        index: 3,
        title: 'zzzzz'
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
          <img src={dataItem.icon} style={{ width: '60px', height: '60px' }} alt="" />
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