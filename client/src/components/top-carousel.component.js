import React from "react";
import { Carousel, Image } from "react-bootstrap";
const pic1 = require('../img/Pic-1.jpg')
const pic2 = require('../img/Pic-2.jpg')
const pic3 = require('../img/Pic-3.jpg')

class TopCarousel extends React.Component {
    render() {
        return (
            <Carousel className="p-0"  fade controls={false} indicators={false} interval={5000} >
                <Carousel.Item  >
                    <Image className="w-100"  src={pic1} text="First slide" />
                    <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center" >
                    <h1 className="carousel-text p-2 rounded">Welcome to Lot No. 6</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="w-100" src={pic2} text="Second slide" />
                    <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center" >
                    <h1 className="carousel-text p-2 rounded">Welcome to Lot No. 6</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="w-100" src={pic3} text="Third slide" />
                    <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center" >
                    <h1 className="carousel-text p-2 rounded" >Welcome to Lot No. 6</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        )
    }
}

export default TopCarousel;