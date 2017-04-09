import React, { Component } from 'react'
import ElectronConfig from 'electron-config'

const electronConfig = new ElectronConfig()

class Settings extends Component {
  constructor (props) {
    super(props)

    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleApiKeyChange = this.handleApiKeyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      url: electronConfig.get('url'),
      apikey: electronConfig.get('apikey'),
      success: null
    }
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
    this.setState({success: true})
  }

  render () {
    return (
      <div className="row" style={{margin: '20px'}} >
        <div className="container">
          <h2>Settings</h2>
          <br />
          {this.state.success ? (
            <div className="alert alert-success" role="alert">
              The settings has been updated !
            </div>
          ):null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="url">
                <strong>Server Url :</strong>
              </label>
              <input
                type="text"
                value={this.state.url}
                onChange={this.handleUrlChange}
                name="url"
                className="form-control"
                placeholder="ex: localhost:8080/" />
            </div>
            <div className="form-group">
              <label htmlFor="apikey">
                <strong>Api Key :</strong>
              </label>
              <input
                type="text"
                value={this.state.apikey}
                onChange={this.handleApiKeyChange}
                name="apikey"
                className="form-control"
                placeholder="your api key" />
            </div>
            <input type="submit" className="btn btn-default" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Settings
