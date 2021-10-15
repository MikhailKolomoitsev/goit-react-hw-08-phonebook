import { createSlice } from "@reduxjs/toolkit";
import { getisLoggedIn } from "redux/selectors";

export const INITIAL_STATE = {
    name: '',
    email: '',
    error:''
}


export const loginSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        registerSuccess: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        registerFailure: (state, action) => {
            state.error=action.payload.error
        },
        loginSuccess: (state, action)=>{},
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