import { Component } from 'react'
import { connect } from 'react-redux'
import { LOGOUT_REQUEST } from './constants'

class LogoutPage extends Component {

  componentWillMount() {
    this.props.dispatch({
      type: LOGOUT_REQUEST
    })
  }

  render() {
    return null;
  }
}

export default connect()(LogoutPage);