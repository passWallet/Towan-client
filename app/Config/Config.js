// @flow
import React, { Component } from 'react'
import ElectronConfig from 'electron-config'

const electronConfig = new ElectronConfig()

class Config extends Component {

  constructor (props, context) {
    super(props, context)

    this.state = {
      url: '',
      apikey: ''
    }
  }

  componentWillMount () {
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleApiKeyChange = this.handleApiKeyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUrlChange (e) {
    this.setState({url: e.target.value})
  }

  handleApiKeyChange (e) {
    this.setState({apikey: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()

    // Need to verify if '/' added at the end
    if (this.state.url.slice(-1) === '/') {
      electronConfig.set('url', this.state.url.substr(0, this.state.url.length - 1))
    } else {
      electronConfig.set('url', this.state.url)
    }
    electronConfig.set('apikey', this.state.apikey)

    this.context.router.push('/')
  }

  render () {
    return (
      <div className="container text-center">
        <h1>We need to setup config</h1>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="url">Your remote server address : </label>
            <input
              type="text"
              className="form-control"
              name="url"
              placeholder="ex : localhost:8000/"
              onChange={this.handleUrlChange} />
          </div>
          <div className="form-group">
            <label htmlFor="apikey">Api Key : </label>
            <input
              type="text"
              className="form-control"
              name="apikey"
              placeholder="Your api key"
              onChange={this.handleApiKeyChange} />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
      </div>
    )
  }
}

Config.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Config
