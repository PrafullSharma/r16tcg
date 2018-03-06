import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';
// import { setClient } from './client/actions'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

export const PrivateRoute = ({ component, redirectTo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (

        checkAuthorization() ?
          (
            renderMergedProps(component, routeProps, rest)
          ) : (
            <Redirect
              to={{
                pathname: redirectTo,
                state: { from: routeProps.location },
              }}
            />
          )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

function checkAuthorization () {
  // attempt to grab the token from localstorage
  const storedToken = localStorage.getItem('token')

  // if it exists
  if (storedToken) {
    // parse it down into an object
    const token = JSON.parse(storedToken)

    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const createdDate = new Date(token.created)
    const created = Math.round(createdDate.getTime() / 1000)
    const ttl = 1209600
    const expiry = created + ttl

    // if the token has expired return false
    if (created > expiry) return false
    // otherwise, dispatch the token to our setClient action
    // which will update our redux state with the token and return true
    // dispatch(setClient(token))
    return true
  }

  return false
}