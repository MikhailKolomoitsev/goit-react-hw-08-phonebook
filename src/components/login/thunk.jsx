import axios from "axios";
import { ACCOUNT_BASE_URL } from "./API";

import {
    registerSuccess,
    registerFailure,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    logoutFailure
} from './slice'

export function register() {
    return function (dispatch) {
        dispatch({ type: "REGISTER_REQUEST" })

        return axios
            .post(`${ACCOUNT_BASE_URL}/users/signup`)
            .then(function (response) {
                console.log("REGISTER_REQUEST", response)
                dispatch(registerSuccess(response.data))
            }).catch(function (error) { dispatch(registerFailure({ error: error.toString() })) })
    }
}

export function login() {
    return function (dispatch) {
        dispatch({ type: "LOGIN_REQUEST" })

        return axios
            .post(`${ACCOUNT_BASE_URL}/users/login`)
            .then(function (response) {
                console.log("lOGIN_REQUEST", response)
                dispatch(loginSuccess(response.data))
            }).catch(function (error) { dispatch(loginFailure({ error: error.toString() })) })
    }
}

export function logout() {
    return function (dispatch) {
        dispatch({ type: "LOGOUT_REQUEST" })

        return axios
            .post(`${ACCOUNT_BASE_URL}/users/logout`)
            .then(function (response) {
                console.log("LOGOUT_REQUEST", response)
                dispatch(logoutSuccess(response.data))
            }).catch(function (error) { dispatch(logoutFailure({ error: error.toString() })) })
    }
}