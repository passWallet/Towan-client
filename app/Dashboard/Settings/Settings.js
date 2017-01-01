import React, { Component } from 'react'
import ElectronConfig from 'electron-config'

const electronConfig = new ElectronConfig()

class Settings extends Component {
  constructor (props) {
    super(props)

    this.state = {
      url: electronConfig.get('url'),
      apikey: electronConfig.get('apikey')
    }
  }

  render () {
    return (
      <div className="row" style={{margin: '20px'}} >
        <div className="container">
          <h2>Settings</h2>
            Server Url : <br />
            {this.state.url}
            <br />
            <br />
            Api Key :
            <br />
            {this.state.apikey}
          </div>
      </div>
    )
  }
}

export default Settings
