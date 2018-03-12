import React, { Component, Fragment } from 'react'
import HomeBanner from './homeBanner'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HomeBanner/>
        <h1 className="title">Homepage</h1>
      </Fragment>
    )
  }
}

export default Home
