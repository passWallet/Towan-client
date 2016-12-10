import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Navbar from './Navbar'

@inject(['store'])
@observer
class Dashboard extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.store)
    this.store = this.props.store
  }

  componentDidMount() {
    this.store.fetchData()
  }

  render () {
    return (
      <div>
        <Navbar />
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
                { this.store.addresses.map(function(object, i){
                  return  (<tr>
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
        </div>
    )
  }
}

export default Dashboard
