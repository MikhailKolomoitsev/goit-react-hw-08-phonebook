import axios from 'axios'
import { ACCOUNT_BASE_URL } from './API'
// import { getisLoggedIn } from 'redux/selectors'

import {
  currentSuccess,
  currentFailure,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './slice'

const TOKEN = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export function current() {
  return function (dispatch, getState) {
    const {
      user: { token: persist },
    } = getState()
    console.log('persist:', !!persist)
    if (!persist) {
      return
    }
    TOKEN.set(persist)
    dispatch({ type: 'CURRENT_REQUEST' })

    return axios
      .get(`${ACCOUNT_BASE_URL}/users/current`)
      .then(function (response) {
        console.log('response current:', response)
        dispatch(currentSuccess(response.data))
      })
      .catch(function (error) {
        TOKEN.unset()
        dispatch(currentFailure(error.message))
      })
  }
}

export function register(user) {
  console.log('user:', user)
  return function (dispatch) {
    dispatch({ type: 'REGISTER_REQUEST' })

    return axios
      .post(`${ACCOUNT_BASE_URL}/users/signup`, user)
      .then(function (response) {
        console.log('response register:', response)
        const {
          user: { name, email },
          token,
        } = response.data
        TOKEN.set(token)
        dispatch(registerSuccess({ name, email, token }))
      })
      .catch(function (error) {
        dispatch(registerFailure(error.message))
      })
  }
}

export function login(credentials) {
  return function (dispatch) {
    dispatch({ type: 'LOGIN_REQUEST' })

    return axios
      .post(`${ACCOUNT_BASE_URL}/users/login`, { ...credentials })
      .then(function (response) {
        console.log('response login:', response)

        const {
          user: { name, email },
          token,
        } = response.data
        dispatch(loginSuccess({ name, email, token }))
        TOKEN.set(response.data.token)
      })
      .catch(function (error) {
        dispatch(loginFailure(error.message))
      })
  }
}

export function logout() {
  return function (dispatch) {
    dispatch({ type: 'LOGOUT_REQUEST' })

    return axios
      .post(`${ACCOUNT_BASE_URL}/users/logout`)
      .then(function (response) {
        console.log('response logout:', response)

        TOKEN.unset()
        dispatch(logoutSuccess())
      })
      .catch(function (error) {
        console.log('logoutFailure:', error.message)
        dispatch(logoutFailure(error.message))
      })
  }
}
