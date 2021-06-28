import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import Article from 'pages/Article'
import QuarantineGames from 'pages/QuarantineGames'
import Game from 'pages/Game'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={Game} />
        <Route path="/about" component={About} />
        <Route path="/article" component={Article} />
        <Route path="/quarantine-games" component={QuarantineGames} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
