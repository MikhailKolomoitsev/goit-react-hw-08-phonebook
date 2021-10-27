import { createSlice } from '@reduxjs/toolkit'
// import { getisLoggedIn } from 'redux/selectors'

export const INITIAL_STATE = {
  name: null,
  email: null,
  token: null,
  error: false,
}

export const loginSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    currentSuccess: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
    },
    currentFailure: (state, { payload }) => {
      state.error = payload.error
    },
    registerSuccess: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
      state.token = payload.token
    },
    registerFailure: (state, { payload }) => {
      state.error = payload.error
    },
    loginSuccess: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
      state.token = payload.token
    },
    loginFailure: ({ error }, { payload }) => {
      error = payload.error
    },
    logoutSuccess: (state, action) => {
      state.name = null;
      state.email = null;
      state.token = null;
    },
    logoutFailure: (state, { payload }) => {
      state.error = payload;
    },
  },
})

export const {
  currentSuccess,
  currentFailure,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} = loginSlice.actions

export default loginSlice.reducer

// {
// "user": {
//     "name": "djmischa",
//         "email": "djmischa@mail.com"
// },
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTZhYWE3MTNkYjY3YTAwMTVmMmM0N2IiLCJpYXQiOjE2MzQzODA0MDF9.JjutbE8YTB6yOpTQUOWvOVybdbGX5ayrb6E7P7mwoyY"
// }
