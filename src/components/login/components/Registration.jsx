import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const INITIAL_VALUES = {
    name: '',
    email: '',
    passwrod: '',
    confirmPassword: '',
}


const Registration = () => {
    const validate = useCallback(
        (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Required🧐';
            } else if (values.name.length<2) {
                errors.name = 'Invalid name😢';
            } else { errors.name = 'thats good😃'}

            if (!values.email) {
                errors.email = 'Required🧐';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address😢';
            } else { errors.email = 'thats good😃' }

            if (!values.passwrod) {
                errors.passwrod = 'Required🧐';
            } else if (values.passwrod.length < 7 || values.passwrod.length > 15) {
                errors.passwrod = 'Invalid value, password should have  7-15 symbols😉';
            } else { errors.passwrod = 'thats good😃' }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required🧐';
            } else if (values.confirmPassword.length < 7 || values.confirmPassword.length > 15) {
                errors.confirmPassword = 'Invalid value, password should have  7-15 symbols😉';
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Passwords do not match😢';
            }
            else if (values.confirmPassword === values.password) {
                errors.confirmPassword = '😃Ayai, passwords match😃';
            }
            return errors;
        },
        []
    )

    const handleSubmit = useCallback(
        (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
        []
    )

    return (
        < div >
            <h1>Registration Form</h1>
            <Formik
                initialValues={INITIAL_VALUES}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="name">Name </label>
                        <Field type="text" name="name" placeholder='Enter name' />
                        <br />
                        <br />
                        <ErrorMessage name="name" component="div" />
            
                        <label htmlFor="email">Email Address </label>
                        <Field type="email" name="email" placeholder='Enter email'/>
                        <br />
                        <br />
                        <ErrorMessage name="email" component="div" />
                        <br />
                        <label htmlFor="password">Password </label>
                        <Field type="password" name="password" placeholder='Enter password' />
                        <br />
                        <ErrorMessage name="password" component="div" />
                        <br />
                        <label htmlFor="passwordRepeat">Confirm Password </label>
                        <Field type="password" name="confirmPassword" placeholder='Enter password again'/>
                        <br />
                        <ErrorMessage name="confirmPassword" component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <Link to={routes.login}>Have an account? Login here!</Link>
        </div >)

}

export  {Registration}