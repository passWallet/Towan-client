import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import classNames from 'classnames'
import moment from 'moment'

@inject(['store'])
@observer
class Recap extends Component {

  constructor (props) {
    super(props)
    this.store = this.props.store
  }

  componentWillMount () {
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
                var usedClass = classNames('fa', {
                  'fa-check': object.used,
                  'fa-close': !object.used
                })
                return (
                  <tr>
                    <th scope="row">{object.id}</th>
                    <td>{object.address}</td>
                    <td><i className={usedClass} aria-hidden="true"></i></td>
                    <td>{moment(object.creation_date).format('LLL')}</td>
                  </tr>)
              })}
            </tbody>
          </table>
          <div className="clearfix">
            {this.store.meta ?
              (this.store.meta.previous ?
                <a href="#" onClick={this.store.fetchData(this.store.meta.previous)} className="float-xs-left"><i className="fa fa-chevron-left" aria-hidden="true"></i></a> :
                null) :
              null
            }
            {this.store.meta ?
              (this.store.meta.next ?
                <a href="#" onClick={this.store.fetchData(this.store.meta.next)} className="float-xs-right"><i className="fa fa-chevron-right" aria-hidden="true"></i></a> :
                null) :
              null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Recap
