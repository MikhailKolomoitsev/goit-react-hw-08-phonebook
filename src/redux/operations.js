import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
// import { getisLoggedIn } from './selectors';

const URL = 'https://connections-api.herokuapp.com'
// if (getisLoggedIn()) {
//   const TOKEN = getisLoggedIn()

//   axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
// }

axios.defaults.baseURL = URL
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts')
      return contacts.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await axios.post('/contacts', { name, number })
      return contact.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, { rejectWithValue }) => {
    try {
      const contact = await axios.delete(`contacts/${contactID}`)
      return contact
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

// export const deleteContact=contactID=>dispatch=>{
// dispatch(deleteContactRequest())
// axios
// .delete(`contacts/${contactID}`)
// .then(()=>dispatch(deleteContactSuccess(contactID)))
// .catch(error=>dispatch(deleteContactError(error.message)))
// }
