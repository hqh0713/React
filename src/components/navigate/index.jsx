import React from 'react';
import { NavBar, Icon } from 'antd-mobile'
import { goBack } from '../../common/js/util'

function Navigate(props) {
  return <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => goBack()}
          >
          {props.title}
          </NavBar>;
}
 
export default Navigate;