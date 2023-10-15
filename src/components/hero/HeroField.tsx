import { Link } from "react-router-dom";
import { Movie } from "../../constants/types";
import Navbar from "../navbar/Navbar";
import "./HeroField.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const HeroField = ({ movie }: { movie: Movie }) => {
  return (
    <div className="hero wrapper">
      <Navbar />
      <img
        className="hero_background"
        alt="hero_background"
        src={`${process.env.REACT_APP_IMG_PATH}${movie?.backdrop_path}`}
      />
      <div className="blur overlay"></div>

      <div className="hero-detail_wrapper ">
        {/* <img
          className="hero-movie_banner"
          alt="banner"
          src={`${process.env.REACT_APP_IMG_PATH}${movie?.poster_path}`}
        /> */}
        <h1 className="hero-detail_title">{movie?.original_title}</h1>
        <div className="hero-movie_tags">
          {movie?.genres?.map((item, index) => (
            <div style={{ display: "flex" }} key={index}>
              <span className="tag">{item}</span>
              <div className="dot" />
            </div>
          ))}
          <span className="tag" style={{ color: "#d9d9d9cc" }}>
            2h 28m
          </span>
        </div>
        <p className="hero-movie_description">
          {movie?.overview.split(" ").slice(0, 25).join(" ")}...
        </p>
        <div className="hero-movie_actionBtn">
          <button type="button" className="btn">
            <AiFillPlayCircle color="" />
            Watch Now
          </button>
          <Link to={`/movie/${movie?.id}/details`} className="btn">
            <IoIosArrowDroprightCircle color="white" />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroField;
