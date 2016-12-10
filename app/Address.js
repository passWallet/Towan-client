import { observable, action } from 'mobx'
import axios from 'axios'

axios.defaults.headers.authorization = 'Apikey lola:b8367cb5137e30b32da9df46631cda8c4997b2c3'

class Address {
  @observable addresses = []

  async fetchData () {
    let {data} = await axios.get('http://192.168.33.10:8000/api/admin/address')
    console.log(data.objects)
    this.setAddresses(data.objects)
  }

  @action setAddresses (data) {
    this.addresses = data
  }

  @action clear () {
    this.addresses = []
  }
}

export default Address
