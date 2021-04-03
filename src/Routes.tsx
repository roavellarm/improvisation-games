import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Game, About, Article, NotFound } from './pages'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={Game} />
        <Route path="/about" component={About} />
        <Route path="/article" component={Article} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
