import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from '@/views/home'
import List from '@/views/list'
import Edit from '@/views/edit'
import NotFound from '@/views/not-found'

export default function MyRouter() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/edit" component={Edit}></Route>
          <Redirect from="/" to="/home" exact />
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
