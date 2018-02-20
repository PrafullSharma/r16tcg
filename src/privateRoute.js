import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';

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
        localStorage.getItem('token') ?
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
