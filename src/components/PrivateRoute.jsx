import React from 'react'
import { useSelector } from 'react-redux'
import { getisLoggedIn } from 'redux/selectors'
import { Route, Redirect } from 'react-router-dom'
import { routes } from 'utils/routes'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(getisLoggedIn)
  console.log('PrivateRoute:', isLoggedIn)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.registration} />
        )
      }
    />
  )
}

export default PrivateRoute
