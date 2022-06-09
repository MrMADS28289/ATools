import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
      style={{ backgroundColor: '#ffffff' }}
      expand="lg"
      className='border-bottom sticky-top'>
      <Container>
        <Navbar.Brand href="#home">
          <p
            style={{
              color: '#023047'
            }}
            className='fw-bolder fs-3'>ATools<span style={{ color: '#FB8500' }} className='fs-6 fw-bolder'>.</span>
          </p>
        </Navbar.Brand>
        <div className='d-none d-sm-none d-md-block'>
          <button
            style={{ backgroundColor: "#023047" }}
            className='border-0 me-3 text-white px-3 py-2 fw-semibold'>Start Free Trial</button>
          <button
            style={{ backgroundColor: "#FB8500" }}
            className='border-0 text-white px-5 py-2 fw-semibold'>Login</button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;