import React, { Component } from 'react'
import { inject } from 'mobx-react'
import Navbar from './Navbar'
import ChannelListener from './ChannelListener'

@inject(['store'])
class Dashboard extends Component {
  constructor (props) {
    super(props)

    let options = {
      paymentRecieved: this.paymentRecieved.bind(this)
    }

    const channelListener = new ChannelListener(options)
    channelListener.connect()
  }

  paymentRecieved () {
    console.log('Payment Recieved')
    this.props.store.fetchData()
    let notification = new Notification('New Inconming Transaction', {
      body: 'You have recieved a new payment'
    })
  }

  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard
