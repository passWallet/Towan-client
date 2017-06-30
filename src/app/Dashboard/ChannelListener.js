import assert from 'assert'
import ElectronConfig from 'electron-config'
import WebSocket from 'ws'

class ChannelListener {
	constructor (options) {
		if (options.paymentRecieved) {
			this._paymentRecieved = options.paymentRecieved
		}
	}

	connect () {
		// We need to retrieve the 'url' store in the electron config
		const electronConfig = new ElectronConfig()
		assert(electronConfig.has('url') && electronConfig.has('apikey'))
		
		let options = {
			headers: {
				Authorization: 'Apikey lola:' + electronConfig.get('apikey')
			}
		}

		// Now we can connect to the backend and listen to event
		const socket = new WebSocket('ws://' + electronConfig.get('url') + '/client', options)

		socket.onmessage = this._onMessage.bind(this)
		socket.onerror = this._onError.bind(this)
	}

	_onMessage (event) {
		if (event.data === 'payment_received') {
			this._paymentRecieved()
		}
	}

	_onError (error) {

	}

}

export default ChannelListener
