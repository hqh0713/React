import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Main from './containers/main/index'
import Login from './containers/login/index'
import Mine from './containers/Mine/index'
import MovieDetail from './containers/movieDetail'
import Nav from './containers/nav/index'
import Error from './containers/error'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index';
// 使用合并后的那个Reducer

const Basic = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/mine' component={Mine}></Route>
        <Route path='/movieDetail' component={MovieDetail}></Route>
        <Route component={Error}></Route>
      </Switch>
      <Nav></Nav>
    </Router>
  </Provider>
)
export default Basic
