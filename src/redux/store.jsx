import { configureStore } from '@reduxjs/toolkit'
import contactsReducer, { filter } from './reducer'
import userReducer from 'components/login/slice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter,
    user: userReducer
  },
})
