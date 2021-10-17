import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { addContact } from 'redux/operations'
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';


const INITIAL_VALUES = {
  name: '',
  number: ''
}

function Form({ onSubmit }) {
  const dispatch = useDispatch()

  const handleSubmit = (values, { setSubmitting }) => {
    const { name, number } = values
    onSubmit({ name, number })
   }
   
   const validate = useCallback(
     (values) => {
       const errors = {};
       if (!values.name) {
         errors.name = 'Required🧐';
       } else if (values.name.length < 2) {
         errors.name = 'Invalid name😢';
       }
       if (!values.number) {
         errors.number = 'Required🧐';
       } else if (values.number.length < 7 || values.number.length > 15) {
         errors.number = 'Invalid value, number should have  7-15 symbols😉';
       }
       return errors;
     },
     []
   )

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            style={{ maxWidth: "350px" }}
            id="name"
            name="name"
            label="Name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <br />
          <TextField
            fullWidth
            style={{ maxWidth: "350px" }}
            id="login"
            name="number"
            label="Number"
            type='number' 
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.number && Boolean(errors.number)}
            helperText={touched.number && errors.number}
          />
          <br />
          <br />

          <Button color="primary" variant="contained" type="submit" disabled={isSubmitting ||
            !((
              Object.keys(touched).length ===
              Object.keys(INITIAL_VALUES).length
            ) && Object.keys(errors).length === 0)}>
            Add contact
          </Button>
        </form>
      )}
    </Formik>
  )
}
const mapDispatchToProrps = (dispatch) => ({
  onSubmit: (obj) => dispatch(addContact(obj)),
})
export default connect(null, mapDispatchToProrps)(Form)