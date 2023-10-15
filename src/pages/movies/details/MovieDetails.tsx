import React, { useEffect, useState } from "react";
import HeroField from "../../../components/hero/HeroField";
import Navbar from "../../../components/navbar/Navbar";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import "./MovieDetails.scss";
import SliderComponent from "../../../components/slider/Slider";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../api";
import { MovieDetailsInterface } from "../../../constants/types";
import { log } from "console";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailsInterface>();

  useEffect(() => {
    if (id) {
      getMovieDetails(id)
        .then((data) => {
          setMovie(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <>
      <div className="movie-detail wrapper">
        <Navbar />
        <img
          className="movie-detail_background"
          alt="movie-detail_background"
          src={`${process.env.REACT_APP_IMG_PATH}${movie?.backdrop_path}`}
        />
        <div className="blur overlay"></div>
        <div className="movie-detail_wrapper">
          <h1 className="sleek movie-detail_title">{movie?.original_title}</h1>
          <div className="movie-detail_tags">
            {movie?.genres?.slice(0, 2).map((item, index) => (
              <>
                <span className="tag">{item.name}</span>
                <div className="dot" />
              </>
            ))}
            <span className="glassmorph" style={{ color: "#d9d9d9cc" }}>
              2h 28m
            </span>
          </div>

          <div className="sleek movie-detail_actionBtn">
            <button type="button">
              <AiFillPlayCircle color="" />
              Watch Now
            </button>
            <button type="button">
              <BsFillBookmarkFill color="white" />
              Add Watchlist
            </button>
          </div>
          <p className="sleek movie-detail_description">{movie?.overview}</p>
        </div>
      </div>
      <div className="mainbody wrapper">
        {/* <SliderComponent
          title={"More like this"}
          list={["1", "2", "3", "6", "7", "8"]}
        /> */}
      </div>
    </>
  );
};

export default MovieDetails;
