import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <ul className="navbar-nav">
          <li className="nav-item">
            <IndexLink className="nav-link" to="/" activeClassName="active" >Recap</IndexLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings" activeClassName="active">Settings</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
