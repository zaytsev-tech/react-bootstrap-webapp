import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <Nav className="justify-content-end" style={{width: "100%"}}>
                    <Button variant="primary" className="mx-2">Log In</Button>
                    <Button variant="primary" className="mx-2">Sign In</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}