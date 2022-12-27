import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { img_url } from '../../api';


function MovieCarousel(props) {
    const navigate = useNavigate();

    const gotoMovie = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <>
            <div className='mt-5'>
                <div>
                    <h1 className='text-center'>{props.title}
                    </h1>
                </div>
                <div className="container-fluid row">
                    <div className='col'>
                        <Carousel>
                            {
                                props.data?.results?.map((item, index) => (
                                    <Carousel.Item key={index + item.id} onClick={() => gotoMovie(item.id)}>
                                        <img
                                            className="img-fluid d-block w-100"
                                            src={`${img_url}${item.poster_path}`}
                                            alt={item.title}
                                        />
                                        <Carousel.Caption>
                                            <h3>{item.title}</h3>
                                            <p>{item.release_date}</p>
                                            <p>{item.overview}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieCarousel;