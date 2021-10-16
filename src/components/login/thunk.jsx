import axios from "axios";
import { ACCOUNT_BASE_URL } from "./API";
import { getisLoggedIn } from "redux/selectors";

import {
    registerSuccess,
    registerFailure,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    logoutFailure
} from './slice'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


export function register(user) {
    return function (dispatch) {
        dispatch({ type: "REGISTER_REQUEST" })

        return axios
            .post(`${ACCOUNT_BASE_URL}/users/signup`, { ...user })
            .then(function (response) {
                const { user: { name, email }, token } = response.data
                token.set(token);
                dispatch(registerSuccess({ name, email, token }))
            }).catch(function (error) { dispatch(registerFailure({ error: error.toString() })) })
    }
}

export function login(credentials) {
    return function (dispatch) {
        dispatch({ type: "LOGIN_REQUEST" })

        return axios
            .post(`${ACCOUNT_BASE_URL}/users/login`, {...credentials})
            .then(function (response) {
                const { user: { name, email }, token } = response.data
                dispatch(loginSuccess({ name, email, token }))
                token.set(token);
                console.log(axios.defaults.headers.common.Authorization);
            }).catch(function (error) { dispatch(loginFailure({ error: error.toString() })) })
    }
}

export function logout(token) {
    return function (dispatch) {
        dispatch({ type: "LOGOUT_REQUEST" })

        return axios
            .post(`${ACCOUNT_BASE_URL}/users/logout`, token)
            .then(function (response) {
                dispatch(logoutSuccess(response.data))
                token.unset();
            }).catch(function (error) { dispatch(logoutFailure({ error: error.toString() })) })
    }
}