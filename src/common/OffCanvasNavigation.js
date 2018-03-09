import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class OffCanvasNavigation extends Component {
  render () {
    const Btnlogin = () => {
      if(this.props.client.token) {
        return <li><Link to="/logout">Logout</Link></li>
      } else {
        return <li><Link to="/login">Login</Link></li>
      }
    }
    return (
      <div className="off-canvas position-left" id="offCanvas" data-off-canvas>
        {/*Menu*/}
        <ul className="vertical menu">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/widgets">Widget</Link>
            <ul className="nested vertical menu">
              <li><a href="#0">One</a></li>
              <li><a href="#0">Two</a></li>
              <li><a href="#0">Three</a></li>
            </ul>
          </li>
          <li><Link to="/signup">Signup</Link></li>
          <Btnlogin/>
        </ul>
        {/*Close button*/}
        <button className="close-button" aria-label="Close menu" type="button" data-close="offCanvas">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
})

export default connect(mapStateToProps)(OffCanvasNavigation)