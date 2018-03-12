import React, { Component } from 'react'
import HomeBanner from './homeBanner'

class Home extends Component {
  render() {
    return (
      <div id="homepage">
        <HomeBanner/>
        <h1 className="title">Homepage</h1>
      </div>
    )
  }
}

export default Home
