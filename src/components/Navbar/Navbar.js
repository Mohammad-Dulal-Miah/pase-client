import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarExtra = () => {
    return (
        <div className='navbar-container' >
            <h2><span style={{color: "tomato"}}>Pase</span></h2>
             <Navbar  sticky="top">
               <Container>
                    <Nav className="me-auto">
                        <a href="/home">Home</a>
                        <a href="/categories">Categories</a>
                        <a href="/product">Product</a>
                        <a href="/blog">Blog</a>
                        <a href="/login">Login</a>
                        <a href="/profile">Profile</a>
                    </Nav>
                </Container>
             </Navbar>
        </div>
    );
};

export default NavbarExtra;