import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import discussion from '../Assets/Image/people-with-coffe.png';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    /*** Using hook for shoing error ***/
    const [error, setError] = useState('');

    /*** Handle form submit ***/
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        /*** Fetching provided login url ***/
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(result => {

                /*** Result validation ***/
                if (result.token) {
                    toast.success("Login Success Token " + result.token);
                    setError('');
                    e.target.reset();
                }
                if (result.error) {
                    toast.error(result.error);
                    setError(result.error);
                }
            })
    }
    return (
        <>
            <Row>

                { /*** Login form part ***/}
                <Col className='col-lg-5 d-flex justify-content-center align-items-center'>
                    <div className='w-75'>

                        <div className='my-4'>
                            <h2 className='text-center'>Welcome Back</h2>
                            <h6 className='text-center'>Please Login</h6>
                        </div>

                        <form onSubmit={handleLogin}>
                            <Form.Control
                                className='mb-3'
                                name='email'
                                type="text"
                                placeholder="Email Address"
                                required />
                            <Form.Control
                                className='mb-3'
                                name='password'
                                type="password"
                                placeholder="Password" />

                            {
                                error && <p className='text-danger'>{error}</p>
                            }

                            <input
                                style={{ backgroundColor: "#023047" }}
                                className='border-0 me-3 text-white px-3 py-2 fw-semibold w-100'
                                type="submit" value="Login" />

                            <div className='mt-3 d-flex justify-content-between'>
                                <Form.Check
                                    type='checkbox'
                                    id='form-check'
                                    label='Save My Password'
                                />
                                <a
                                    className='text-decoration-none'
                                    href="/">Forget Password?</a>
                            </div>
                        </form>
                    </div>
                </Col>

                { /*** Login form style part ***/}
                <Col className='col-lg-7 d-none d-sm-none d-md-block'>
                    <img className='w-100' src={discussion} alt="" />
                </Col>

                { /*** For React Toastify ***/}
                <ToastContainer />
            </Row>
        </>
    );
};

export default Login;