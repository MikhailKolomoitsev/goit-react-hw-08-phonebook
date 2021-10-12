import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCallback } from 'react';
import { routes } from 'routes';
import { Link } from 'react-router-dom';

const INITIAL_VALUES = {
    email: '',
    password: ''
}


const Login = () => {
    const validate = useCallback(
        (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
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
            <h1>Login Form</h1>
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
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='Enter email'
                        />
                        <br />
                        {errors.email && touched.email && errors.email}
                        <br />
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder='Enter password'
                        />
                        <br />
                        {errors.password && touched.password && errors.password}
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            <Link to={routes.registration}>Do not have account? Register here!</Link>
        </div >)

}

export { Login }