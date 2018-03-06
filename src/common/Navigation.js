import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

class Navigation extends Component {
  render () {
    const Btnlogin = () => {
      if(this.props.client.id) {
        return <li><Link to="/logout">Logout</Link></li>
      } else {
        return <li><Link to="/login">Login</Link></li>
      }
    }
    return (
      <div>
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
})

export default connect(mapStateToProps)(Navigation)
