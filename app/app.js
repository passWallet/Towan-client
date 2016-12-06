import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import ElectronConfig from 'electron-config'

import { Config } from './Config'
import { Dashboard } from './Dashboard'

import './app.global.css'

const isDev = process.env.NODE_ENV !== 'production'

const electronConfig = new ElectronConfig()

/*  const App = ({ children }) => (
  <Provider {...stores}>
    {children}
  </Provider>
) */

const App = ({ children }) => (
  <Provider>
    {children}
  </Provider>
)

const checkConfig = (nextState, replace) => {
  if (!(electronConfig.has('url') || electronConfig.has('apiKey'))) {
    replace('/config')
  }
}

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} onEnter={checkConfig} />
    <Route path="/config" component={Config} />
    <Route path="*" component={Dashboard} onEnter={checkConfig} />
  </Route>
)

render(
  <div>
    {isDev && <DevTools />}
    <Router history={hashHistory} routes={Routes} />
  </div>,
document.getElementById('root')
)
