import React, { Fragment } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from './history'
import { PrivateRoute } from './privateRoute'
import Navigation from './common/Navigation'
import OffCanvasNavigation from './common/OffCanvasNavigation'
import Home from './home/index'
import Login from './login/index'
import Signup from './signup/index'
import Widgets from './widgets/index'
import NotFoundPage from './common/NotFoundPage'

const Routes = () => (
  <Router history={history}>
    <Fragment>
      <OffCanvasNavigation/>
      <div className="off-canvas-content" data-off-canvas-content>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>

          <PrivateRoute path="/widgets" redirectTo={'/login'} component={Widgets} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default Routes;