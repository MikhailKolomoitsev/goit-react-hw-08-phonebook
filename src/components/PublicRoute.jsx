import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getisLoggedIn } from 'redux/selectors';
import { routes } from 'utils/routes'

const PublicRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = useSelector(getisLoggedIn)
    return (

        <Route {...rest} render={props => (
            isLoggedIn ?
                <Redirect to={routes.home} />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;