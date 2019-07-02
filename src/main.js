import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Main from './containers/main/index'
import Login from './containers/login/index'
import Mine from './containers/Mine/index'
import Nav from './containers/nav/index'
import Error from './containers/error'
import './index.css'

const Basic = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/mine' component={Mine}></Route>
      <Route component={Error}></Route>
    </Switch>
    <Nav></Nav>
  </Router>
)
export default Basic
