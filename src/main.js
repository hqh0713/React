import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Main from './containers/main/index'
import Login from './containers/login/index'
import Mine from './containers/Mine/index'
import Nav from './containers/nav/index'
import './index.css'

const Basic = () => (
  <Router>
    <Route exact path='/' component={Main}></Route>
    <Route path='/login' component={Login}></Route>
    <Route path='/mine' component={Mine}></Route>
    <Nav></Nav>
  </Router>
)
export default Basic
