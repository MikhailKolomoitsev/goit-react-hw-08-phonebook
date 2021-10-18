import React from 'react'
// import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts, deleteContact } from 'redux/operations'
import * as selectors from 'redux/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem, List } from '@material-ui/core'
import Button from '@material-ui/core/Button'

function ListContacts({ onClick }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const contacts = useSelector(selectors.getFilteredContacts)

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name} {number}
            <Button
              variant="outlined"
              id={id}
              onClick={(e) => onClick(e.target.id)}
            >
              delete
            </Button>
          </ListItem>
        ))}
    </List>
  )
}

// ListContacts.propTypes = {
//   contacts: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
//   onClick: PropTypes.func.isRequired,
// };

const mapDispatchToProrps = (dispatch) => ({
  onClick: (id) => dispatch(deleteContact(id)),
})
export default connect(null, mapDispatchToProrps)(ListContacts)
