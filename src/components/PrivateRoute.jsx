import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getisLoggedIn } from 'redux/selectors';
import {routes} from 'utils/routes'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = useSelector(getisLoggedIn)
    return (
        <Route {...rest} render={props => (
            isLoggedIn ?
                <Component {...props} />
                : <Redirect to={routes.registration} />
        )} />
    );
};

export default PrivateRoute;