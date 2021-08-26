import React from 'react';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider.js';
import Jumbotron from './Components/Jumbotron.js';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import slider2 from './slider-images/slider2.jpg';

export const Home = () => {
    return (
        <>
        <Slider />
        <Container className="containerCards">
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={slider2} />
                        <Card.Body>
                            <Card.Title>ZaytsevTech Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis nibh, gravida rhoncus justo. Quisque maximus ligula eros, ut suscipit sapien sollicitudin in. Donec a tempus purus. Sed ultricies dapibus neque eget sagittis.
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={slider2} />
                        <Card.Body>
                            <Card.Title>ZaytsevTech Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis nibh, gravida rhoncus justo. Quisque maximus ligula eros, ut suscipit sapien sollicitudin in. Donec a tempus purus. Sed ultricies dapibus neque eget sagittis.
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={slider2} />
                        <Card.Body>
                            <Card.Title>ZaytsevTech Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis nibh, gravida rhoncus justo. Quisque maximus ligula eros, ut suscipit sapien sollicitudin in. Donec a tempus purus. Sed ultricies dapibus neque eget sagittis.
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron />
        <Container className="container-content">
            <Row>
                <Col md={7}>
                    <img src={slider2} height={400} />
                </Col>
                <Col md={5}>
                    <h2>ZaytsevTech Header</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis nibh, gravida rhoncus justo. Quisque maximus ligula eros, ut suscipit sapien sollicitudin in. Donec a tempus purus. Sed ultricies dapibus neque eget sagittis.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}