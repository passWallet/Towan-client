import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject(['store'])
@observer
class Recap extends Component {

  constructor (props) {
    super(props)
    this.store = this.props.store
  }

  componentDidMount () {
    this.store.fetchData()
  }

  render () {
    return (
      <div className="row" style={{margin: '20px'}} >
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Address</th>
                <th>Used</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.store.addresses.map(function (object, i) {
                return (
                  <tr>
                    <th scope="row">{object.id}</th>
                    <td>{object.address}</td>
                    <td>{object.used}</td>
                    <td>{object.creation_date}</td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Recap
