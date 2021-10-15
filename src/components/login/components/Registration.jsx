import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'utils/routes';
import { useDispatch } from 'react-redux';
import { register } from '../thunk';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const INITIAL_VALUES = {
    name: '',
    email: '',
    passwrod: '',
    confirmPassword: '',
}


const Registration = () => {
    const dispatch = useDispatch()

    const [showPassword, setshowPassword] = useState(false)
    const togglePassword = useCallback(() => {
        setshowPassword(prev => !prev)
    }, [])
    const validate = useCallback(
        (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Required🧐';
            } else if (values.name.length < 2) {
                errors.name = 'Invalid name😢';
            }

            if (!values.email) {
                errors.email = 'Required🧐';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address😢';
            }

            if (!values.password) {
                errors.password = 'Required🧐';
            } else if (values.password.length < 7 || values.password.length > 15) {
                errors.password = 'Invalid value, password should have  7-15 symbols😉';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required🧐';
            } else if (values.confirmPassword.length < 7 || values.confirmPassword.length > 15) {
                errors.confirmPassword = 'Invalid value, password should have  7-15 symbols😉';
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Passwords do not match😢';
            }
            return errors;
        },
        []
    )

    const handleSubmit = useCallback(
        const  {name, email, passowrd}=values


        (values, { setSubmitting }) => {
    setTimeout(() => {
        dispatch(register({ name, email, passowrd }))
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
                {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
                    <Form>
                        <TextField
                            style={{ maxWidth: "350px" }}
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
                            type="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                        <br />
                        <TextField
                            style={{ maxWidth: "350px" }}
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <br />
                        <TextField
                            style={{ maxWidth: "350px" }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        <button onClick={togglePassword}>{showPassword ? 'Hide password' : 'Show password'}</button>
                        <br />
                        <br />
                        <TextField
                            style={{ maxWidth: "350px" }}
                            fullWidth
                            maxWidth="50px"
                            id="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}

                        />

                        <br />
                        <Button color="primary" variant="contained" type="submit" disabled={isSubmitting ||
                            !((
                                Object.keys(touched).length ===
                                Object.keys(INITIAL_VALUES).length
                            ) && Object.keys(errors).length === 0)}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <Link to={routes.login}>Have an account? Login here!</Link>
        </div >)

}

export { Registration }