import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Games from './pages/Games'
import Article from './pages/Article'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/contact" component={Contact} />
        <Route path="/article" component={Article} />
      </Switch>
    </BrowserRouter>
  )
}
