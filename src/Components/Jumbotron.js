import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import slider1 from '../slider-images/slider1.jpg';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url(${slider1}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .jumbo .container {
        padding-top: 25px;
    }

    .overlay {
        background: #000;
        opacity: 0.7;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container className>
            <h1>Zaytsev Tech Header</h1>
            <p>
                This some text for example. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis nibh, gravida rhoncus justo. Quisque maximus ligula eros, ut suscipit sapien sollicitudin in. Donec a tempus purus. Sed ultricies dapibus neque eget sagittis.
            </p>
        </Container>
    </Jumbo>
    </Styles>
);

export default Jumbotron;