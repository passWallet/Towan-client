import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-light bg-faded">
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-toggleable-md" id="navbarResponsive">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Addresses <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
