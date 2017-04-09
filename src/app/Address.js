import { observable, action } from 'mobx'
import axios from 'axios'

import ElectronConfig from 'electron-config'

const electronConfig = new ElectronConfig()

class Address {
  @observable meta
  @observable addresses = []

  fetchData (uri = null) {
    axios.defaults.headers.authorization = 'Apikey lola:' + electronConfig.get('apikey')
    if (!uri) {
      uri = '/api/admin/address?limit=10'
    }
    return axios.get('http://' + electronConfig.get('url') + uri)
  }

  @action setAddresses (data) {
    this.meta = data.meta
    this.addresses = data.objects
  }

  @action clear () {
    this.meta = {}
    this.addresses = []
  }
}

export default Address
