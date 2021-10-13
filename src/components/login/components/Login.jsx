import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCallback } from 'react';
import { routes } from 'routes';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const INITIAL_VALUES = {
    email: '',
    password: ''
}


const Login = () => {
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
                        <TextField
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
                            fullWidth
                            id="login"
                            name="password"
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
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