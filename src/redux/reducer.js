import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { fetchContacts } from './operations'
import { changeFilter } from './actions'
import { addContact, deleteContact } from './operations'
import userReducer from 'components/login/slice'

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => {
    return action.payload
  },
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
})
export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})
export default combineReducers({
  entities,
  isLoading,
  error,
})
