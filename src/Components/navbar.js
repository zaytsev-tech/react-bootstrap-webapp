import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navibar() {
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Zaytsev Tech</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                <br/>
                <Nav className="justify-content-end">
                    <Button variant="primary" className="mr-2">Log In</Button>
                    <Button variant="primary">Sign In</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}