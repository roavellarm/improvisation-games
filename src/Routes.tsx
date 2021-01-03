import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Landing'
import Game from './pages/Game'
import About from './pages/About'
import Article from './pages/Article'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={Game} />
        <Route path="/about" component={About} />
        <Route path="/article" component={Article} />
      </Switch>
    </BrowserRouter>
  )
}
