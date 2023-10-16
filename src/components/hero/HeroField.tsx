import { Link } from "react-router-dom";
import { Movie } from "../../constants/types";
import Navbar from "../navbar/Navbar";
import "./HeroField.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Hero_Skeleton from "./Hero_Skeleton";

const HeroField = ({ movie }: { movie: Movie | null }) => {
  if (!movie) {
    return <Hero_Skeleton />;
  }

  return (
    <div className="hero wrapper">
      <Navbar />
      <img
        className="hero_background fade-in "
        alt="hero_background"
        loading="lazy"
        src={`${process.env.REACT_APP_IMG_PATH}${movie?.backdrop_path}`}
      />
      <div className="blur overlay"></div>
      <div className="hero-detail_wrapper ">
        <h1 className="hero-detail_title">{movie?.original_title}</h1>
        <div className="hero-movie_tags">
          {movie.genres.slice(0, 2).map((item, index) => (
            <div style={{ display: "flex", alignItems: "center" }} key={index}>
              <Link to={`/movies/${item.id}/${item.name}`}>
                <span className="tag">{item.name}</span>
              </Link>
              <div className="dot" />
            </div>
          ))}
          <span className="glassmorph" style={{ color: "#d9d9d9cc" }}>
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
          <Link to={`/movie/${movie.id}/details`} className="btn">
            <IoIosArrowDroprightCircle color="white" />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroField;
