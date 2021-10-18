import './App.css'
import React, { Suspense, useEffect } from 'react'
import UserPage from 'components/UserPage'
import { routes } from 'utils/routes'
import { Registration } from '../src/components/login/components/Registration'
import { Login } from '../src/components/login/components/Login'
import { Switch, NavLink } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import PublicRoute from 'components/PublicRoute'
import Container from '@material-ui/core/Container'

import { useSelector } from 'react-redux'
import { getisLoggedIn } from 'redux/selectors'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { logout } from 'components/login/thunk'
import { current } from 'components/login/thunk'
import { HomePage } from 'components/HomePage'
console.log(current)
export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(`APP useEffect`)
    dispatch(current())
  }, [dispatch])

  const isLoggedIn = useSelector(getisLoggedIn)

  const logoutFunction = () => {
    // тут вызываем операцию разлогинизации
    dispatch(logout())
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={routes.home}>Home</NavLink>
            </li>
            <li>
              <NavLink to={routes.contacts}>Contacts</NavLink>
            </li>
            <li>
              {isLoggedIn ? (
                <Button type="button" onClick={logoutFunction}>
                  logout
                </Button>
              ) : (
                <ul>
                  <li>
                    <NavLink to={routes.login}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.registration}>Registration</NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <Container maxWidth="sm" className="Container">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PrivateRoute component={UserPage} path={routes.contacts} exact />
            <PublicRoute path={routes.home} exact component={HomePage} />
            <PublicRoute
              path={routes.registration}
              exact
              component={Registration}
            />
            <PublicRoute path={routes.login} exact component={Login} />
          </Switch>
        </Suspense>
      </Container>
    </>
  )
}
