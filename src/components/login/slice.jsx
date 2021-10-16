import { createSlice } from "@reduxjs/toolkit";
import { getisLoggedIn } from "redux/selectors";

export const INITIAL_STATE = {
    name: "",
    email: "",
    token:"",
    error:"",
}


export const loginSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        registerSuccess: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        registerFailure: (state, action) => {
            state.error=action.payload.error
        },
        loginSuccess: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        loginFailure: (state, action) => {
            state.error = action.payload.error
        },
        logoutSuccess: (state) => {
            state.name = '';
            state.email=''
        },
        logoutFailure: (state, action)=>{},
    }
})

export const {
    registerSuccess,
    registerFailure,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    logoutFailure
} = loginSlice.actions

export default loginSlice.reducer

// {
// "user": {
//     "name": "djmischa",
//         "email": "djmischa@mail.com"
// },
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTZhYWE3MTNkYjY3YTAwMTVmMmM0N2IiLCJpYXQiOjE2MzQzODA0MDF9.JjutbE8YTB6yOpTQUOWvOVybdbGX5ayrb6E7P7mwoyY"
// }