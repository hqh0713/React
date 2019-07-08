import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile'
import { goBack } from '../../common/js/util'

class Navigate extends Component {
  render() { 
    return ( 
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => goBack()}
        >
        NavBar
        </NavBar>
      </div>
    );
  }
}
 
export default Navigate;