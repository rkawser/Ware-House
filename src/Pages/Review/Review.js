import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from "react-slick";
import './Review.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from '../Share/Loading';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://ware-house-server-production.up.railway.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container className='reviw-bg d-flex align-items-center' fluid>
            <Container>
                <h2 className='review-text text-start mb-5'>Happy Customer  :)</h2>
                {
                    review.length > 0 ?
                <Slider {...settings}>
                    {
                        review.map(review => <Card className='w-75'>
                            <Card.Img variant="top" src={review.img} />
                            <Card.Body>
                                <Card.Title>{review.name}</Card.Title>
                                <Card.Text>
                                    {review.review}
                                </Card.Text>

                            </Card.Body>
                        </Card>)
                    }
                </Slider>
                :
                <div>
                    <Loading></Loading>
                </div>}
            </Container>

        </Container>
    );
};

export default Review;