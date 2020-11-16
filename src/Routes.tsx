import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
<<<<<<< HEAD
import Games from './pages/Games'
import Contact from './pages/Contact'
=======
import Article from './pages/Article'
>>>>>>> pagination

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
<<<<<<< HEAD
        <Route path="/games" component={Games} />
        <Route path="/contact" component={Contact} />
=======
        <Route path="/article" component={Article} />
>>>>>>> pagination
      </Switch>
    </BrowserRouter>
  )
}
