import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

const Navigation = () => (
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
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/logout">Logout</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/widgets">Widget</Link></li>
    </ul>
  </div>
);

export default Navigation;
