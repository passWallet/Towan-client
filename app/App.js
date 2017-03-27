import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import ElectronConfig from 'electron-config'

import { Config } from './Config'
import { Dashboard } from './Dashboard'
import { Recap } from './Dashboard/Recap'
import { Settings } from './Dashboard/Settings'

import './app.global.css'

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
        <Router history={hashHistory}>
          <Route path="/" component={Dashboard} onEnter={checkConfig}>
            <IndexRoute name="Recap" component={Recap} />
            <Route name="Settings" path="/settings" component={Settings} />
          </Route>
          <Route name="Config" path="/config" component={Config} />
          <Redirect from="*" to="Recap" />
        </Router>
      </div>
    )
  }
}

export default App
