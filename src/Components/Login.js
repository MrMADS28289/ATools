import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import discussion from '../Assets/Image/people-with-coffe.png';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(result => console.log(result))
        // console.log(email, password);
    }
    return (
        <>
            <Row>
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
                                placeholder="Email Address" />
                            <Form.Control
                                className='mb-3'
                                name='password'
                                type="password"
                                placeholder="Password" />

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

                <Col className='col-lg-7 d-sm-none d-lg-block'>
                    <img className='w-100' src={discussion} alt="" />
                </Col>
            </Row>
        </>
    );
};

export default Login;