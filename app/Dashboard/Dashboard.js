import React, { Component } from 'react'
import Navbar from './Navbar'

class Dashboard extends Component {
  render () {
    console.log(this.props.children)
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard
