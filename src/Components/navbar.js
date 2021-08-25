import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Container, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        text-decoration: none;
    }

    .nav-link:hover {
        transition: 0.5s;
        font-weight: 600;
    }

    &:hover {
        color: white;
    }
`;

export default function Navibar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
    <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Zaytsev Tech</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                <Nav className="justify-content-end" style={{width: "100%"}}>
                    <Button variant="primary" className="mx-2" onClick={handleShow}>Log In</Button>
                    <Button variant="primary" className="mx-2" onClick={handleShow}>Sign In</Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">Test text for email input</Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group controlId="fromBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    </>
    )
}