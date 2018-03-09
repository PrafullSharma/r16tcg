import React, { Fragment, Component } from 'react';
import Routes from './routes'
import $ from 'jquery'
import 'foundation-sites'

class App extends Component {
  componentDidMount() {
    $(document).foundation();
  }

  render() {
    return (
      <Fragment>
        <Routes/>
      </Fragment>
    )
  }
}

export default App;