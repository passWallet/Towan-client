// @flow
import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import DevTools from 'mobx-react-devtools'
import ElectronConfig from 'electron-config'

import { Config } from './Config'
import { Dashboard } from './Dashboard'
import { Recap } from './Dashboard/Recap'
import { Settings } from './Dashboard/Settings'

import './app.global.css'

const isDev = process.env.NODE_ENV !== 'production'

const electronConfig = new ElectronConfig()

const checkConfig = (nextState, replace) => {
  if (!(electronConfig.has('url') || electronConfig.has('apiKey'))) {
    replace('/config')
  }
}

class App extends Component {
  render () {
    return (
      <div>
      {isDev && <DevTools />}
        <Router history={hashHistory}>
          <Route path="/" component={Dashboard} onEnter={checkConfig}>
            <IndexRoute component={Recap} />
            <Route path="settings" component={Settings} />
          </Route>
          <Route path="/config" component={Config} />
          {/*<Route path="*" component={Dashboard} onEnter={checkConfig} /> */}
        </Router>
      </div>
    )
  }
}

export default App
