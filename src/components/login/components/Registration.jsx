import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
}


const Registration = () => {
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
            <h1>Registration Form</h1>
            <Formik
                initialValues={INITIAL_VALUES}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="name" placeholder='Enter name' />
                        <br />
                        <ErrorMessage name="name" component="div" />
                        <br />
                        <Field type="email" name="email" placeholder='Enter email'/>
                        <br />
                        <ErrorMessage name="email" component="div" />
                        <br />

                        <Field type="password" name="password" placeholder='Enter password' />
                        <br />
                        <ErrorMessage name="password" component="div" />
                        <br />
                        <Field type="password" name="passwordRepeat" placeholder='Repeat password'/>
                        <br />
                        <ErrorMessage name="passwordRepeat" component="div" />

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