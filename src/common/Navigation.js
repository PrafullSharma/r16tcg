import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

class Navigation extends Component {
  render () {
    const Btnlogin = () => {
      if(this.props.client.token) {
        return <li><Link to="/logout">Logout</Link></li>
      } else {
        return <li><Link to="/login">Login</Link></li>
      }
    }
    return (
      <header>
        <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="responsive-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Site Title</li>
              <li className="has-submenu">
                <a href="#0">One</a>
                <ul className="submenu menu vertical" data-submenu>
                  <li><a href="#0">One</a></li>
                  <li><a href="#0">Two</a></li>
                  <li><a href="#0">Three</a></li>
                </ul>
              </li>
              <li><a href="#0">Two</a></li>
              <li><a href="#0">Three</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
        </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <ul className="topnav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/widgets">Widget</Link></li>
          <Btnlogin/>
        </ul>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
})

export default connect(mapStateToProps)(Navigation)
