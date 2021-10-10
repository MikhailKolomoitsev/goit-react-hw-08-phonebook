import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
import {fetchContacts, deleteContact} from 'redux/operations'
import * as selectors from 'redux/selectors'
import { useSelector, useDispatch } from "react-redux";

function ListContacts({onClick}) {
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(fetchContacts())
   }, [dispatch])

   const contacts=useSelector(selectors.getFilteredContacts)

  return (<ul>
    {contacts.length>0 && contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} {number}
        <button type="button" id={id} onClick={(e)=>
          onClick(e.target.id)
          }>
          delete
        </button>
      </li>
    ))}
  </ul>)
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
