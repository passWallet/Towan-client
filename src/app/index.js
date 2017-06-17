import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import App from './App'
import AddressStore from './store/Address'

let address = new AddressStore()

render(
  <Provider store={address}>
    <App />
  </Provider>,
  document.getElementById('root')
)
