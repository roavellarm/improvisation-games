import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable from 'loadable-components'

const About = loadable(() => import('pages/About'))
const Article = loadable(() => import('pages/Article'))
const Game = loadable(() => import('pages/Game'))
const Home = loadable(() => import('pages/Home'))
const QuarentineGames = loadable(() => import('pages/Quarentine'))
// const NotFound = loadable(() => import('pages/NotFound'))

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={Game} />
        <Route path="/about" component={About} />
        <Route path="/article" component={Article} />
        {/* <Route path="*" component={NotFound} /> */}
        <Route path="/quarentine" component={QuarentineGames} />
      </Switch>
    </BrowserRouter>
  )
}
