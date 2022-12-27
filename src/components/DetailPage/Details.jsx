import React from "react";
import { useParams } from "react-router-dom"
import { useQuery } from 'react-query';
import { BiCameraMovie, BiHeart } from "react-icons/bi";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./../../reduxStore/actions";
import { FcLike } from "react-icons/fc";

import { fetchSingleMovie, fetchSingleMovieCredits, fetchReviews } from '../../api';
import './Details.scss';

const Details = (props) => {
    const { movieId } = useParams()
    const dispatch = useDispatch();
    const reviewsQuery = useQuery(["reviews", movieId], () => fetchReviews(movieId), { retry: false, select: state => state?.data })

    const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
    const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false, select: state => state?.data })
    const movieData = movieQuery?.data

    const reviewsData = reviewsQuery?.data
    const movieCrewData = movieCreditsQuery?.data?.crew
    const job = ["director", "producer"];
    const genre = ["Action", "Drama"];

    const items = useSelector(state => state.reducer.items);
    var colorList = ["Brown", "Blue", "Red", "Purple", "Orange", "Green"];
    const bgColor = colorList[Math.floor((Math.random() * colorList.length))]

    let isAddedToWishlist = false;
    if (items && items.length > 0 && movieData) {
        var recs = items.filter((item, index) => item.id == movieData.id);
        isAddedToWishlist = recs.length > 0;
    }

    const addToWishlist = (id, title, genre, poster_path, release_date) => {
        dispatch(actionCreators.addToList({ id, title, genre, poster_path, release_date }));
    };

    const removeFromWishlist = (id, title, genre, poster_path, release_date) => {
        dispatch(actionCreators.removeItem({ id, title, genre, poster_path, release_date }));
    };

    const showAlert = () => {
        alert("You have already added this product to the wishlist");
    }

    const showRemoveAlert = () => {
        alert("This product is not in wishlist");
    }

    return (
        <>
            <div>
                <div className="container-fluid">
                    <h1>Details</h1>
                    <div className="row">
                        {movieData ? (
                            <>
                                <div className="col-md-7">
                                    <img style={{ width: '100%', height: '400px' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" />
                                </div>
                                <div className="col-md-5" style={{ backgroundColor: bgColor }}>
                                    <div>
                                        <h3>Movie Name: {movieData?.title}</h3>
                                        <h5>Overview: </h5>
                                        <h6 className="my-2">{movieData?.overview}</h6>
                                        <h6>Movie Released Date:
                                            <span className={movieData.release_date ? '' : 'text-info'}>{movieData?.release_date ? movieData?.release_date : ' Unknown'}</span>
                                        </h6>
                                        <h6 >
                                            Genre:{movieData?.genres.map((item, index) =>
                                                <Badge bg="info" key={item.id + index} className="inline-block mx-1">
                                                    {item.name}
                                                </Badge>

                                            )}
                                            {!movieData?.genres || movieData?.genres.length == 0 ? (
                                                <>
                                                    <div className="col text-info">
                                                        <h6>Genre information not present, feel free to add one!</h6>
                                                    </div>

                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </h6>
                                    </div>
                                    {
                                        movieData?.genres?.filter(item => genre.includes(item.name)).length > 0 ?
                                            <>
                                                {isAddedToWishlist
                                                    ? <FcLike />
                                                    : <BiHeart />
                                                }

                                                <div className="mt-2">
                                                    <div
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            !isAddedToWishlist
                                                                ? addToWishlist(movieData.id, movieData.title, movieData.genres, movieData.poster_path, movieData.release_date)
                                                                : showAlert()
                                                        }}
                                                    >
                                                        {isAddedToWishlist
                                                            ? "Added to Wishlist"
                                                            : "Add to Wishlist"}
                                                    </div>

                                                </div>
                                                <div className="mt-2">

                                                    <div
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            isAddedToWishlist
                                                                ? removeFromWishlist(movieData.id, movieData.title, movieData.genres, movieData.poster_path, movieData.release_date)
                                                                : showRemoveAlert()
                                                        }}
                                                    >
                                                        {isAddedToWishlist
                                                            ? "Remove from Wishlist"
                                                            : "Not in Wishlist"}
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                {isAddedToWishlist
                                                    ? <FcLike onClick={() => {
                                                        removeFromWishlist(movieData.id, movieData.title, movieData.genres, movieData.poster_path, movieData.release_date)
                                                    }} />
                                                    : <BiHeart onClick={() => {
                                                        addToWishlist(movieData.id, movieData.title, movieData.genres, movieData.poster_path, movieData.release_date)
                                                    }} />
                                                }

                                                {isAddedToWishlist
                                                    ? <span>Added to Wishlist</span>
                                                    : <span>Not in Wishlist</span>
                                                }
                                            </>
                                    }




                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col">
                            <h5>Crew:</h5>
                            <div className="d-flex">

                                {
                                    movieCrewData?.filter(item => job.includes(item.job.toLowerCase())).map((item, index) =>

                                        <Card className="me-2" key={item + index}>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"><BiCameraMovie />{item.job}</Card.Subtitle>

                                            </Card.Body>
                                        </Card>
                                    )
                                }
                                {!movieCrewData || movieCrewData.length == 0 ? (
                                    <>
                                        <div className="col text-info">
                                            <h6>There is no crew present, feel free to add one!</h6>
                                        </div>

                                    </>
                                ) : (
                                    <></>
                                )}

                            </div>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <h5>Reviews:</h5>
                        {
                            reviewsData?.results.map((item, index) =>

                                <div className="col-md-4" key={item + index}>
                                    <div className="card post">
                                        <div className="post-heading">
                                            <div className="float-start">
                                                {item?.author_details?.avatar_path ? (
                                                    <>
                                                        <img src={item.author_details.avatar_path.indexOf('https://') > -1 ? (item.author_details.avatar_path.charAt(0) == '/' ? item.author_details.avatar_path.substring(1) : item.author_details.avatar_path) : `https://image.tmdb.org/t/p/w500` + item.author_details.avatar_path} className="img-circle avatar" alt="user profile image" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <img className="img-circle avatar" alt="movie snap" />
                                                    </>
                                                )}

                                            </div>
                                            <div className="float-start">
                                                <div className="h5">
                                                    <b style={{ color: "#8e44ad" }}>{item?.author_details.name} ({item?.author_details.username})</b>
                                                </div>
                                                <h6 className="text-muted time">{new Date(item?.updated_at).toDateString()} {new Date(item?.updated_at).toLocaleTimeString()}</h6>
                                            </div>
                                        </div>
                                        <div className="post-description">
                                            <p>{item?.content}</p>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {!reviewsData?.results || reviewsData?.results.length == 0 ? (
                            <>
                                <div className="col text-info">
                                    <h6>There are no reviews present, feel free to add one!</h6>
                                </div>

                            </>
                        ) : (
                            <></>
                        )}

                    </div>
                </div>
            </div>

        </>
    )
};


export default Details;