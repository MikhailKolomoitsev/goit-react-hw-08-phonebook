import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {changeFilter} from "redux/actions";
import { useSelector,useDispatch} from "react-redux";

export default  function Filter (){
  const id = uuidv4();
  const dispatch=useDispatch()

  return (
    <>
      <label htmlFor={id}>   </label>
      <input id={id}
       type="text"  
       onChange={(e)=>{
         dispatch(changeFilter(e.target.value))
       }} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,

// })

// const mapDispatchToProps = dispatch => ({
//   onChange: (e) => dispatch(actions.changeFilter(e.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
