import { configureStore } from '@reduxjs/toolkit'
import contactsReducer, { filter } from './reducer'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter
  },
})
