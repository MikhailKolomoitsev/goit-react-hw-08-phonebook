import Filter from './Filter/Filter'
import Form from './Form/Form'
import ListContacts from './ListContacts/ListContacts'
// import { useCallback } from 'react'
// import { useDispatch } from 'react-redux'
// import Button from '@material-ui/core/Button'
// import { logout } from 'components/login/thunk'

export default function UserPage() {
  //   const dispatch = useDispatch()
  return (
    <div className="App">
      <h3>Phonebook</h3>
      <Form />
      {/* <Button
        variant="outlined"
        color="red"
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </Button> */}
      <br />
      <Filter />
      <h3>Contacts</h3>
      <ListContacts />
    </div>
  )
}
