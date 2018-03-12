import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg'

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
        <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="large">
          <button className="menu-icon" type="button" data-toggle="offCanvas">&nbsp;</button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="responsive-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Site Title{/*<img src={logo} className="App-logo" alt="logo" />*/}</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="has-submenu"><Link to="/">Home</Link></li>
              <li><Link to="/widgets">Widget</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <Btnlogin/>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
})

export default connect(mapStateToProps)(Navigation)
