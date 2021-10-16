import React, { useCallback, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { routes } from 'utils/routes';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { login } from '../thunk';

const INITIAL_VALUES = {
    email: '',
    password: ''
}


const Login = () => {
    const dispatch = useDispatch()

    const [showPassword, setshowPassword] = useState(false)
    const togglePassword = useCallback(() => {
        setshowPassword(prev => !prev)
    }, [])
    const validate = useCallback(
        (values) => {
            const errors = {};
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
            return errors;
        },
        []
    )

    const handleSubmit = useCallback(
        (values, { setSubmitting }) => {
            const {email, password } = values
            dispatch(login({ email, password }))
            setSubmitting(false)
        },
        [dispatch]
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
                        <TextField
                            fullWidth
                            style={{ maxWidth: "350px" }}
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
                            fullWidth
                            style={{ maxWidth: "350px" }}
                            id="login"
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        <Button color="success" size="small" onClick={togglePassword}>{showPassword ? 'Hide password' : 'Show password'}</Button>
                        <br />
                        <br />

                        <Button color="primary" variant="contained"  type="submit" disabled={isSubmitting ||
                            !((
                                Object.keys(touched).length ===
                                Object.keys(INITIAL_VALUES).length
                            ) && Object.keys(errors).length === 0)}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
            <br />
            <Link to={routes.registration}>Do not have account? Register here!</Link>
        </div >)

}

export { Login }