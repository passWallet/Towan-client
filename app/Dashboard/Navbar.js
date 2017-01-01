import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-light bg-faded">
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-toggleable-md" id="navbarResponsive">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <IndexLink className="nav-link" to="/" activeClassName="active" >Recap</IndexLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings" activeClassName="active">Settings</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
