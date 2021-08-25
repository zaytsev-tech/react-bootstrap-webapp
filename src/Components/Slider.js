import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../slider-images/slider1.jpg';

export default function Navibar() { 
    const heightSlider = '550px';
    return (
        <Carousel nextLabel="" prevLabel="">
            <Carousel.Item style={{'height': heightSlider}}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First Slide">
                </img>
                <Carousel.Caption>
                    <h3>Test header1</h3>
                    <p>Some text for description of image</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': heightSlider}}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Second Slide">
                </img>
                <Carousel.Caption>
                    <h3>Test header2</h3>
                    <p>Some text for description of image</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': heightSlider}}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Third Slide">
                </img>
                <Carousel.Caption>
                    <h3>Test header3</h3>
                    <p>Some text for description of image</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}